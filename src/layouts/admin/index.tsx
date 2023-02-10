import { navigationLinks } from "src/routes";
import { Header } from "./header";
import { getSearchString, styled } from "src/utils";
import { layoutSettings } from "./layout-settings";
import { useAuth } from "src/hooks";
import { useState } from "react";
import { authConfig, projectConfig } from "src/config";
import { useLocation } from "react-router-dom";
import {
  Avatar,
  Menu,
  MenuItem,
  MenuList,
  MenuPopover,
  MenuTrigger,
} from "@fluentui/react-components";
import { customizedTheme as theme } from "src/theme";

const MainContentWrapper = styled("div")`
  background: linear-gradient(14deg, #33d4fb, #fbccff 28%, #fff 63%);
  width: 100vw;
  max-width: 100vw;
  overflow: auto;
  height: calc(100vh - ${layoutSettings.header.height});
  max-height: 100vh;
`;

const StyledMenuPopover = styled(MenuPopover)`
  background: ${theme.colors.themeColors.white};
`;

export const AdminLayout: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  const { search } = useLocation();
  const { isAuthenticated, data, logout } = useAuth();
  const image = data?.image || null;
  const name = data?.name || null;
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

  const actions = (
    <Menu>
      <MenuTrigger>
        {isAuthenticated ? (
          <Avatar name={name} image={{ src: image }} />
        ) : (
          <a
            href={`${authConfig.liveAppsPortal}?${getSearchString({
              // include the current search string to the redirect url, to reuse it every where
              // liveapps portal will giveback the search string we pass to the redirecturl
              redirectUrl: `${projectConfig.appBaseurl}${authConfig.authPage}${search}`,
            })}}`}
          >
            <Avatar name={name} image={{ src: image }} />
          </a>
        )}
      </MenuTrigger>
      <StyledMenuPopover>
        <MenuList>
          <MenuItem>Profile</MenuItem>
          <MenuItem onClick={!loading && handleLogout}>
            {loading ? "..." : "Logout"}
          </MenuItem>
        </MenuList>
      </StyledMenuPopover>
    </Menu>
  );

  return (
    <>
      <Header navigationLinks={navigationLinks.adminLayout} actions={actions} />
      <MainContentWrapper>{children}</MainContentWrapper>
    </>
  );
};
