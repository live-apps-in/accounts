import { Actions } from "./actions";
import { Logo } from "./logo";
import styled from "styled-components";
import { NAVIGATION_LINKS } from "src/routes";
import { YCenter, JustifyBetween } from "src/components";

const StyledHeader = styled(JustifyBetween)`
  padding: 20px;
  align-items: center;
  flex-wrap: wrap;
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
  return (
    <StyledHeader>
      <Logo />
      <YCenter>{actions && <Actions>{actions}</Actions>}</YCenter>
    </StyledHeader>
  );
};
