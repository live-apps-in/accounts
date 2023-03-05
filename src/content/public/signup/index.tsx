import { layoutSettings } from "src/layouts/public/layout-settings";
import { mediaQuery } from "src/theme";
import { styled } from "src/utils";
import { SignupBanner } from "./banner";
import { SignupFormContent } from "./signup-form";

const StyledSignupPageWrapper = styled("div")`
  width: 100%;
  height: calc(100vh - ${layoutSettings.header.height});
  ${mediaQuery.up("md")} {
    display: grid;
    grid-template-columns: 50% 50%;
  }
`;

export const SignupPortalContent: React.FC = () => {
  return (
    <StyledSignupPageWrapper>
      <SignupFormContent />
      <SignupBanner />
    </StyledSignupPageWrapper>
  );
};
