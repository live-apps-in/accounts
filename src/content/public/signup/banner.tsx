import { AnimatedText, CustomText, XYCenter } from "src/components";
import { customizedTheme as theme } from "src/theme";
import { styled } from "src/utils";

const StyledSignupBannerContainer = styled("div")`
  width: 100%;
  height: 100%;
  padding: 20px 10px;
`;

const StyledSignupBannerWrapper = styled(XYCenter)`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  background: linear-gradient(
    14deg,
    rgba(246, 235, 247, 1) 2%,
    rgba(251, 204, 255, 1) 46%,
    rgba(51, 212, 251, 1) 74%,
    rgba(255, 255, 255, 1) 100%
  );
`;

const GlassCard = styled("div")`
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(4px);
  border-radius: 2px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  padding: 30px;
  width: 85%;
`;

const LiveAppsGradient = styled("span")`
  background: -webkit-linear-gradient(90deg, #4ac7fa 0%, #e649f5 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bold;
`;

export const SignupBanner: React.FC = () => {
  return (
    <StyledSignupBannerContainer>
      <StyledSignupBannerWrapper>
        <GlassCard>
          <CustomText as="h1">
            <span style={{ color: theme.colors.themeColors.white }}>
              Welcome to <LiveAppsGradient>Live Apps</LiveAppsGradient>
            </span>
          </CustomText>
        </GlassCard>
      </StyledSignupBannerWrapper>
    </StyledSignupBannerContainer>
  );
};
