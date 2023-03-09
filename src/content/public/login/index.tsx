import { layoutSettings } from "src/layouts/public/layout-settings";
import { mediaQuery } from "src/theme";
import { styled } from "src/utils";
import { LoginBanner } from "./banner";
import { LoginFormContent } from "./login-form";

const StyledLoginPageWrapper = styled("div")`
  width: 100%;
  height: 100vh;
  ${mediaQuery.up("md")} {
    display: grid;
    grid-template-columns: 50% 50%;
  }
`;

export const LoginPortalContent: React.FC = () => {
  return (
    <StyledLoginPageWrapper>
      <LoginFormContent />
      <LoginBanner />
    </StyledLoginPageWrapper>
  );
};
