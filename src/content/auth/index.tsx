import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AppLoader } from "src/components";
import { authConfig, projectConfig } from "src/config";
import { useAuth } from "src/hooks";
import { ACCOUNTS_AUTH_FLOW_QUERY_DATA } from "src/model";
import {
  getSearchQuery,
  getSearchString,
  handleError,
  navigateToUrl,
} from "src/utils";

export const AuthPageContent = () => {
  const navigate = useNavigate();
  const { search } = useLocation();
  const searchQuery = getSearchQuery(
    search
  ) as unknown as ACCOUNTS_AUTH_FLOW_QUERY_DATA;
  const { login } = useAuth();

  useEffect(() => {
    handleLogin();
  }, []);

  const handleLogin = async () => {
    const { token, refreshToken, backToURL } = searchQuery || {};
    if (token && refreshToken) {
      try {
        const data = await login({ token, refreshToken });
        // TODO: make use of backtoURL here
        navigate(`${backToURL || `/${data.role || ""}`}`);
      } catch (err) {
        handleError(err);
      }
    } else {
      window.flash({
        message: "Required details are missing in the url search query",
        appearance: "error",
      });
      const liveappsAuthURL = `${authConfig.liveAppsPortal}?${getSearchString({
        // include the current search string to the redirect url, to reuse it every where
        // liveapps portal will giveback the search string we pass to the redirectUrl
        redirectUrl: `${projectConfig.appBaseurl}${authConfig.authPage}${search}`,
      })}`;
      navigateToUrl(liveappsAuthURL);
    }
  };

  return <AppLoader />;
};
