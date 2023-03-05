import { XYCenter } from "src/components";
import { styled } from "src/utils";

const StyledSignupFormWrapper = styled(XYCenter)`
  width: 100%;
  height: 100%;
  background: linear-gradient(14deg, #33d4fb, #fbccff 28%, #fff 63%);
`;

export const SignupBanner: React.FC = () => {
  return <StyledSignupFormWrapper>Login Banner</StyledSignupFormWrapper>;
};
