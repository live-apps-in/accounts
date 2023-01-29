import { XYCenter } from "../common";
import styled from "styled-components";
import { AppLogoMiniImage } from "src/assets";
import { Spinner } from "@fluentui/react-components";

const StyledApploaderWrapper = styled(XYCenter)`
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  gap: 10px;
  img {
    width: 53px;
    height: 65px;
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
