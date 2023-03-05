import { useAuth } from "src/hooks";
import { Header } from "./header";
import { getSearchString, styled } from "src/utils";
import {
  Avatar,
  Menu,
  MenuItem,
  MenuList,
  MenuPopover,
  MenuTrigger,
} from "@fluentui/react-components";
import { authConfig, projectConfig } from "src/config";
import { useLocation } from "react-router-dom";
import { layoutSettings } from "./layout-settings";

const MainContentWrapper = styled("div")`
  width: 100vw;
  max-width: 100vw;
  min-height: calc(100vh - ${layoutSettings.header.height});
  overflow: hidden;
`;

// const BackgroundDivision = styled("div")`
//   background: linear-gradient(14deg, #33d4fb, #fbccff 28%, #fff 63%);
//   width: 100vw;
//   height: 100vh;
//   left: 0;
//   position: fixed;
//   top: 0;
//   z-index: -1;
// `;

export const PublicLayout = ({ children }) => {
  const { isAuthenticated, data } = useAuth();
  const { search } = useLocation();
  const image = data?.image || null;
  const name = data?.name || null;

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

      {isAuthenticated && (
        <MenuPopover>
          <MenuList>
            <MenuItem>Profile</MenuItem>
            <MenuItem>Logout</MenuItem>
          </MenuList>
        </MenuPopover>
      )}
    </Menu>
  );

  return (
    <>
      <Header actions={actions} />
      <MainContentWrapper>{children}</MainContentWrapper>
      {/* <BackgroundDivision /> */}
    </>
  );
};
