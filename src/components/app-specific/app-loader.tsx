import { XYCenter } from "../common";
import { styled } from "src/utils";
import { AppLogoMiniImage } from "src/assets";
import { Spinner } from "@fluentui/react-components";
import { mediaQuery } from "src/theme";

const StyledApploaderWrapper = styled(XYCenter)`
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  gap: 10px;
  img {
    width: 40px;
    height: 40px;
    border-radius: 10px;
  }
  ${mediaQuery.up("sm")} {
    img {
      width: 80px;
      height: 80px;
    }
  }
`;

export const AppLoader = () => {
  return (
    <StyledApploaderWrapper>
      <img src={AppLogoMiniImage} alt="App Logo Mini" />
      <Spinner />
    </StyledApploaderWrapper>
  );
};
