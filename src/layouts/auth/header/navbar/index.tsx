import { Tab, TabList } from "@fluentui/react-components";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CustomDropdown, CustomText } from "src/components";
import { useUniqueKey } from "src/hooks";
import { NAVIGATION_LINKS } from "src/routes";
import { customizedTheme as theme, mediaQuery } from "src/theme";
import { getValidRouteName, removeSlashAtLast } from "src/utils";
import styled from "styled-components";

interface NAVBAR_PROPS {
  navigationLinks?: NAVIGATION_LINKS;
}

const StyledNavbarWrapper = styled("div")`
  display: none;
  ${mediaQuery.up(1092)} {
    display: block;
  }
`;

const StyledTab = styled(Tab)`
  padding: 0 !important;
  &::after {
    background-color: ${theme.colors.themeColors.primary};
  }
  > span > a > * {
    padding: 12px 10px;
  }
`;

export const Navbar: React.FC<NAVBAR_PROPS> = ({ navigationLinks = [] }) => {
  const keys = useUniqueKey(navigationLinks);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [updatedPathname, setUpdatedPathname] = useState(pathname);

  useEffect(() => {
    setUpdatedPathname(pathname);
  }, [pathname]);

  return (
    <StyledNavbarWrapper>
      <TabList
        color={theme.colors.themeColors.primary}
        selectedValue={removeSlashAtLast(updatedPathname)}
      >
        {navigationLinks.map((el, index) => (
          <StyledTab key={keys[index]} value={el.path}>
            {
              el.children ? 
                <CustomDropdown
                  appearance="transparent"
                  placeholder={el.name}
                  style={{border: 'none'}}
                  isNav
                  selectedOptions={[removeSlashAtLast(updatedPathname)]}
                  options={el.children.map((el) => ({
                    value: el.path,
                    label: el.name,
                  }))}
                  onChange={({ target: { value } }) => navigate(getValidRouteName(value))}
                />
                : <CustomText href={el.path} as="h5" style={{ fontWeight: "bold" }}>
                    {el.name}
                  </CustomText>
            }
          </StyledTab>
        ))}
      </TabList>
    </StyledNavbarWrapper>
  );
};
