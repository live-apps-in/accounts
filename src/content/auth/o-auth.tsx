import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { authSetup, rbacSetup } from "src/data";
import { useAuth } from "src/hooks";
import { useLocation } from "react-router-dom";
import { getSearchQuery, handleError } from "src/utils";
import { AppLoader } from "src/components";
import { WelcomeModal } from "./welcome-modal";

export const OAuthPageContent = () => {
  const { authenticate } = useAuth<true>({ isOAuth: true });
  const navigate = useNavigate();
  const { search } = useLocation();
  const searchQuery = getSearchQuery(search);
  const authURL = searchQuery && (searchQuery["authURL"] as string);
  const backToURL = searchQuery && (searchQuery["backToURL"] as string);

  useEffect(() => {
    // maintain the auth page URL in local storage. Since there is no other way when redirected to a different url, while this process is going on
    if (authURL) localStorage.setItem("authURL", authURL);

    // maintain the backtoURL in local storage. Since there is no other way when redirected to a different url, while this process is going on
    if (backToURL) localStorage.setItem("backToURL", backToURL);

    // authenticate the user using OAuth
    handleAuthentication();
  }, []);

  const getUtilProperties = () => {
    const authURL = localStorage.getItem("authURL");
    const backToURL = localStorage.getItem("backToURL");
    return { authURL, backToURL };
  };

  const deleteUtilProperties = () => {
    localStorage.removeItem("authURL");
    localStorage.removeItem("backToURL");
  };

  const handleAuthentication = async () => {
    const { authURL, backToURL } = getUtilProperties();
    try {
      const data = await authenticate();
      navigate(
        backToURL || rbacSetup.homePage[data.role] || authSetup.homePage
      );
      window.modal({
        type: "custom",
        component: (props) => <WelcomeModal {...props} name={data.name} />,
        containerProps: { closeOnOutsideClick: true },
        contentContainerProps: { style: { width: "90%" } },
      });
      window.flash({ message: "Successfully Authenticated" });
    } catch (err) {
      handleError(err);
      navigate(authURL || authSetup.signupPage);
    }
    // delete the utilProperties once its purpose is over
    deleteUtilProperties();
  };

  return <AppLoader />;
};
