import { useState, useEffect } from "react";
import { Actions } from "./actions";
import { Logo } from "./logo";
import { styled } from "src/utils";
import { NAVIGATION_LINKS } from "src/routes";
import { CustomText, FlexRow, JustifyBetween } from "src/components";
import { customizedTheme as theme, mediaQuery } from "src/theme";
import { Helmet } from "react-helmet";

const StyledDesktopHeaderWrapper = styled(JustifyBetween)`
  padding: 20px 10vw;
  align-items: center;
  ${mediaQuery.down(1200)} {
    display: none;
  }
`;

const StyledTabletHeaderWrapper = styled(JustifyBetween)`
  padding: 20px 5vw;
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
  padding: 10px 19px;
  align-items: center;
  ${mediaQuery.up("md")} {
    display: none;
  }
`;

const TitleContainer = styled(FlexRow)`
  gap: 10px;
  align-items: center;
`;

export interface HEADER_PROPS {
  navigationLinks?: NAVIGATION_LINKS;
  actions?: React.ReactNode;
}

export const Header: React.FC<
  HEADER_PROPS & { children?: React.ReactNode }
> = ({
  // navigationLinks = [],
  actions = null,
}) => {
  const [title, setTitle] = useState(document.title);

  useEffect(() => {
    setTitle(document.title);
  }, [document.title]);

  return (
    <>
      <Helmet onChangeClientState={(newState) => setTitle(newState.title)} />
      <StyledMobileHeaderWrapper>
        <TitleContainer>
          <Logo />
          <CustomText
            as="h4"
            style={{
              fontWeight: 300,
              color: theme.colors.themeColors.white,
            }}
          >
            {title}
          </CustomText>
        </TitleContainer>
        <Actions>{actions}</Actions>
      </StyledMobileHeaderWrapper>
      <StyledTabletHeaderWrapper>
        <Logo />
        <Actions>{actions}</Actions>
      </StyledTabletHeaderWrapper>
      <StyledDesktopHeaderWrapper>
        <Logo />
        <Actions>{actions}</Actions>
      </StyledDesktopHeaderWrapper>
    </>
  );
};
