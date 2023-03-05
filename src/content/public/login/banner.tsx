import { XYCenter } from "src/components";
import { styled } from "src/utils";

const StyledLoginFormWrapper = styled(XYCenter)`
  width: 100%;
  height: 100%;
  background: linear-gradient(14deg, #33d4fb, #fbccff 28%, #fff 63%);
`;

export const LoginBanner: React.FC = () => {
  return <StyledLoginFormWrapper>Login Banner</StyledLoginFormWrapper>;
};
