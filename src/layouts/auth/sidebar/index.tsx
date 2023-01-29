import { Divider, Tab, TabList } from "@fluentui/react-components";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CustomDropdown, CustomText } from "src/components";
import { useUniqueKey } from "src/hooks";
import { NAVIGATION_LINKS } from "src/routes";
import { customizedTheme as theme, mediaQuery } from "src/theme";
import { getValidRouteName, removeSlashAtLast } from "src/utils";
import styled from "styled-components";
import { Logo } from "../header/logo";

interface SIDEBAR_PROPS {
  navigationLinks?: NAVIGATION_LINKS;
  isOpen?: boolean;
  handleClose?: () => any;
}

const StyledCustomDropdown = styled(CustomDropdown)`
  button {
    padding: 0;
    margin: 4px 3px;
  }
`;

const StyledSidebarContainerWrapper = styled("div")`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #83818161;
  z-index: 10;
  ${mediaQuery.up(1200)} {
    display: none;
  }
`;

const StyledSidebarWrapper = styled("div")`
  height: 100vh;
  width: fit-content;
  max-width: 75vw;
  padding: 20px;
  position: relative;
  background: ${theme.sidebar.background};
  box-shadow: ${theme.sidebar.boxShadow};
  animation: slide 0.3s linear;

  @keyframes slide {
    0% {
      margin-left: -100vw;
    }
    100% {
      margin-left: 0;
    }
  }
`;

const StyledLogoContainer = styled("div")`
  position: sticky;
  top: 0;
`;

const StyledTab = styled(Tab)`
  display: flex;
  &::after {
    background-color: ${theme.colors.themeColors.primary};
  }
  > span {
    flex: 1;
    text-align: left;
  }
`;

export const Sidebar: React.FC<SIDEBAR_PROPS> = ({
  navigationLinks = [],
  isOpen = false,
  handleClose = () => {},
}) => {
  const keys = useUniqueKey(navigationLinks);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [updatedPathname, setUpdatedPathname] = useState(pathname);

  useEffect(() => {
    setUpdatedPathname(pathname);
  }, [pathname]); 

  const handleNavItemClick = () => {
    event.stopPropagation();
  };

  return (
    isOpen && (
      <StyledSidebarContainerWrapper onClick={handleClose}>
        <StyledSidebarWrapper>
          <StyledLogoContainer>
            <Logo />
          </StyledLogoContainer>
          <Divider style={{ margin: "10px 0" }} />
          <TabList
            color={theme.colors.themeColors.primary}
            selectedValue={removeSlashAtLast(pathname)}
            vertical
          >
            {navigationLinks.map((el, index) => (
              <div key={keys[index]} onClick={handleNavItemClick}>
                <StyledTab value={el.path}>
                  {
                    el.children ? 
                      <StyledCustomDropdown
                        appearance="transparent"
                        placeholder={el.name}
                        style={{border: 'none', }}
                        isNav
                        selectedOptions={[removeSlashAtLast(updatedPathname)]}
                        options={el.children.map((el) => ({
                          value: el.path,
                          label: el.name,
                        }))}
                        onChange={({ target: { value } }) => {
                          handleClose();
                          navigate(getValidRouteName(value));
                        }}
                      />
                      : <CustomText href={el.path} as="h5" style={{ fontWeight: "bold" }}>
                          {el.name}
                        </CustomText>
                  }
                </StyledTab>
              </div>
            ))}
          </TabList>
        </StyledSidebarWrapper>
      </StyledSidebarContainerWrapper>
    )
  );
};
