import {
  API_HEADER_AUTH_DETAILS,
  AUTH_DATA,
  LOGIN_AUTH_PROPS,
} from "src/model";
import { axiosInstance, createApiFunction } from "src/utils";
import { Gateway } from "./gateway";

class AuthApi {
  login(loginData: LOGIN_AUTH_PROPS): Promise<AUTH_DATA> {
    return createApiFunction(() =>
      axiosInstance.post("/auth/signin", loginData)
    );
  }
  initialize(): Promise<AUTH_DATA> {
    return createApiFunction(() => axiosInstance.get("/auth/refresh"));
  }
  logout(): Promise<void> {
    return createApiFunction(() => axiosInstance.get("/auth/logout"));
  }
  oAuth(loginData: any): Promise<AUTH_DATA> {
    return createApiFunction(() =>
      axiosInstance.post("/auth/social", loginData)
    );
  }
  getAccessTokenFromRefreshToken(
    refreshToken: API_HEADER_AUTH_DETAILS["refreshToken"]
  ): Promise<{ accessToken: API_HEADER_AUTH_DETAILS["token"] }> {
    const customGateway = new Gateway({ setupCustomizations: false })
      .setupHeadersForRequestInterceptors({ "x-refresh-token": refreshToken })
      .create();
    return createApiFunction(() =>
      // use a new gateway instead of existing gateway to not include the refresh token logic for this api call
      // else it will create an infinite loop
      customGateway.get("/auth/token/refresh")
    );
  }
}

export const authApi = new AuthApi();
