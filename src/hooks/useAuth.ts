import { userApi, authApi } from "src/api";
import { authConfig } from "src/config";
import {
  AUTH_DATA,
  USE_AUTH_OPTIONS,
  API_HEADER_AUTH_DETAILS,
} from "src/model";
import { useSelector } from "src/redux";
import { deleteCookie, getCookie, setCookie } from "src/utils";
import { useActions } from "src/hooks";

export const useAuth = () => {
  const { auth } = useSelector((state) => state);
  const { authActions, userActions } = useActions();

  function initialize({
    updateRedux = true,
  }: USE_AUTH_OPTIONS = {}): Promise<AUTH_DATA> {
    return new Promise(async (resolve, reject) => {
      try {
        const token = getCookie(authConfig.tokenAccessor);
        if (!token) {
          deleteCookie(authConfig.refreshTokenAccessor);
          throw new Error("Session expired");
        }
        // initialize the app by fetching details from profile route (initialize function is replaced by profile route)
        const data = await userApi.profile();
        // we don't need to store token and refresh token in the redux. those only should be used from cookies
        data.role = "admin";
        if (updateRedux) {
          authActions.initialize({ data, isAuthenticated: true });
          userActions.setProfile(data);
        }
        resolve(data);
      } catch (err) {
        if (updateRedux) authActions.logout();
        reject(err);
      }
    });
  }

  async function login(
    data: API_HEADER_AUTH_DETAILS,
    { updateRedux = true }: USE_AUTH_OPTIONS = {}
  ): Promise<AUTH_DATA> {
    setCookie(authConfig.tokenAccessor, data.token);
    setCookie(authConfig.refreshTokenAccessor, data.refreshToken);
    // fetch auth data from profile (similar action while we initialize our app)
    const authData = await userApi.profile();
    // we don't need to store token and refresh token in the redux. those only should be used from cookies
    delete authData["token"];
    delete authData["refreshToken"];
    const loginDetails = { role: "admin", ...authData };
    if (updateRedux) {
      authActions.login(loginDetails);
      userActions.setProfile(loginDetails);
    }
    return loginDetails;
  }

  function logout({
    updateRedux = true,
  }: USE_AUTH_OPTIONS = {}): Promise<void> {
    return new Promise(async (resolve, reject) => {
      try {
        await authApi.logout();
        deleteCookie(authConfig.tokenAccessor);
        deleteCookie(authConfig.refreshTokenAccessor);
        window.location.reload();
        if (updateRedux) authActions.logout();
        resolve();
      } catch (err) {
        if (updateRedux) authActions.logout();
        deleteCookie(authConfig.tokenAccessor);
        deleteCookie(authConfig.refreshTokenAccessor);
        window.location.reload();
        reject(err);
      }
    });
  }

  const authUtils = {
    initialize,
    login,
    logout,
    ...auth,
  };
  return authUtils;
};
