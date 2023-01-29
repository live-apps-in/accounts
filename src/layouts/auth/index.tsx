import { navigationLinks } from "src/routes";
import { Header } from "./header";
import styled from "styled-components";
import { CustomButton, MediaQueryBox } from "src/components";
import { layoutSettings } from "./layout-settings";
import { useSelector } from "src/redux";
import { useAuth } from "src/hooks";
import { useState } from "react";
import { authSetup } from "src/data";
import { isActiveRoute } from "src/utils";
import { useLocation } from "react-router-dom";
import {
  PersonArrowRight24Regular,
  Power24Filled,
} from "@fluentui/react-icons";
import { Tooltip } from "@fluentui/react-components";

const MainContentWrapper = styled("div")`
  width: 100vw;
  max-width: 100vw;
  overflow: auto;
  height: calc(100vh - ${layoutSettings.header.height});
  max-height: 100vh;
`;

export const AuthLayout: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const { pathname } = useLocation();
  const { logout } = useAuth();
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    setLoading(true);
    try {
      await logout();
    } catch (err) {
      /* ignore error */
    }
    setLoading(false);
  };

  const authenticationButtonProps = {
    loading,
    onClick: isAuthenticated && handleLogout,
    href: !isAuthenticated ? authSetup.signupPage : undefined,
  };

  const actions =
    // display only if its not the signup page
    !isActiveRoute({ path: pathname, route: authSetup.signupPage }) ? (
      <>
        <MediaQueryBox down={{ breakpoint: "md", style: { display: "none" } }}>
          <Tooltip
            content={isAuthenticated ? "Logout" : "Authenticate"}
            relationship="label"
          >
            <CustomButton {...authenticationButtonProps}>
              {isAuthenticated ? "Logout" : "Sign Up"}
            </CustomButton>
          </Tooltip>
        </MediaQueryBox>
        <MediaQueryBox up={{ breakpoint: "md", style: { display: "none" } }}>
          <Tooltip
            content={isAuthenticated ? "Logout" : "Authenticate"}
            relationship="description"
          >
            <CustomButton
              {...authenticationButtonProps}
              style={{ padding: 0, margin: 0 }}
              icon={
                isAuthenticated ? (
                  <Power24Filled />
                ) : (
                  <PersonArrowRight24Regular />
                )
              }
            />
          </Tooltip>
        </MediaQueryBox>
      </>
    ) : (
      <div />
    );

  return (
    <>
      <Header navigationLinks={navigationLinks.authLayout} actions={actions} />
      <MainContentWrapper>{children}</MainContentWrapper>
    </>
  );
};
