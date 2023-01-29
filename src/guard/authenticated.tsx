import { authSetup } from "src/data";
import { useAuth } from "src/hooks";
// import { useOAuth } from "src/hooks";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

// this guard will redirect the page if the user is not authenticated
export const Authenticated: React.FunctionComponent<{
  // #rbac-setup
  roles?: Array<string>;
  children: React.ReactNode;
}> = ({ roles, children }) => {
  const [verified, setVerified] = useState(false);
  const { isAuthenticated, data } = useAuth();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (!isAuthenticated || !data) {
      const url = `${authSetup.authPage}?backToURL=${pathname}`;
      navigate(url);
    } else {
      const userRole = data?.role;
      // if the user's role doesn't match, then redirect user to 404 page
      if (roles && !roles.includes(userRole))
        navigate("/404", { replace: true });
      else setVerified(true);
    }
  }, []);

  if (!verified) return null;

  return <>{children}</>;
};
