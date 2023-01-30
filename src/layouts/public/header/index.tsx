import { Actions } from "./actions";
import { Logo } from "./logo";
import { styled } from "src/utils";
import { CustomText, JustifyBetween } from "src/components";
import { customizedTheme as theme, HamburgerIcon, mediaQuery } from "src/theme";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

const StyledDesktopHeaderWrapper = styled(JustifyBetween)`
  padding: 20px;
  align-items: center;
  ${mediaQuery.down(1200)} {
    display: none;
  }
`;

const StyledTabletHeaderWrapper = styled(JustifyBetween)`
  padding: 20px;
  align-items: center;
  ${mediaQuery.down("md")} {
    display: none;
  }
  ${mediaQuery.up(1200)} {
    display: none;
  }
`;

const StyledMobileHeaderWrapper = styled(JustifyBetween)`
  width: 100%;
  background-color: ${theme.colors.themeColors.primary};
  padding: 19px;
  align-items: center;
  ${mediaQuery.up("md")} {
    display: none;
  }
`;

export interface HEADER_PROPS {
  // navigationLinks?: NAVIGATION_LINKS;
  actions?: React.ReactNode;
}

export const Header = ({ actions = null }) => {
  const [title, setTitle] = useState(document.title);

  useEffect(() => {
    setTitle(document.title);
  }, [document.title]);

  return (
    <>
      <Helmet onChangeClientState={(newState) => setTitle(newState.title)} />
      <StyledMobileHeaderWrapper>
        <CustomText
          as="h4"
          style={{ fontWeight: "bold", color: theme.colors.themeColors.white }}
        >
          {title}
        </CustomText>
        <Actions>{actions}</Actions>
      </StyledMobileHeaderWrapper>
      <StyledTabletHeaderWrapper>
        <Logo />
        <Actions>{actions}</Actions>
      </StyledTabletHeaderWrapper>
      <StyledDesktopHeaderWrapper>
        <Logo />
      </StyledDesktopHeaderWrapper>
    </>
  );
};
