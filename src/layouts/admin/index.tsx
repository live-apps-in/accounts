import { navigationLinks } from "src/routes";
import { Header } from "./header";
import styled from "styled-components";
import { CustomButton, CustomDropdown, FlexRow } from "src/components";
import { layoutSettings } from "./layout-settings";
import { useAuth } from "src/hooks";
import { useEffect, useState } from "react";
import { authSetup } from "src/data";
import { getValidRouteName, isActiveRoute, removeSlashAtLast } from "src/utils";
import { useLocation, useNavigate } from "react-router-dom";

const MainContentWrapper = styled("div")`
  width: 100vw;
  max-width: 100vw;
  overflow: auto;
  height: calc(100vh - ${layoutSettings.header.height});
  max-height: 100vh;
`;

const StyledActionsWrapper = styled(FlexRow)`
  align-items: center;
`;

export const AdminLayout: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  const { pathname } = useLocation();
  const { logout } = useAuth();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [updatedPathname, setUpdatedPathname] = useState(pathname);

  useEffect(() => {
    setUpdatedPathname(pathname);
  }, [pathname]);

  const handleLogout = async () => {
    setLoading(true);
    try {
      await logout();
    } catch (err) {
      /* ignore error */
    }
    setLoading(false);
  };

  const actions = (
    <StyledActionsWrapper>
      <CustomDropdown
        variant="filled-darker"
        appearance="subtle"
        selectedOptions={[removeSlashAtLast(updatedPathname)]}
        options={navigationLinks.adminLayout.map((el) => ({
          value: el.path,
          label: el.name,
        }))}
        onChange={({ target: { value } }) => navigate(getValidRouteName(value))}
      />
      {
        // display only if its not the signup page
        !isActiveRoute({ path: pathname, route: authSetup.signupPage }) && (
          <CustomButton loading={loading} onClick={handleLogout}>
            Logout
          </CustomButton>
        )
      }
    </StyledActionsWrapper>
  );

  return (
    <>
      <Header navigationLinks={navigationLinks.adminLayout} actions={actions} />
      <MainContentWrapper>{children}</MainContentWrapper>
    </>
  );
};
