import { styled } from "src/utils";
import { projectConfig } from "src/config";
import { AppLogoFullImage } from "src/assets";
import { mediaQuery } from "src/theme";
import { Link } from "react-router-dom";

const StyledLogoWrapper = styled(Link)`
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

export const Logo = () => {
  return (
    <StyledLogoWrapper to="/">
      <img src={AppLogoFullImage} alt={projectConfig.title} />
    </StyledLogoWrapper>
  );
};
