import { EmojiSmileSlight24Regular } from "@fluentui/react-icons";
import {
  CustomButton,
  // CustomCard,
  CustomText,
  CUSTOM_MODAL_COMPONENT_PROPS,
  XYCenter,
} from "src/components";
import { customizedTheme as theme } from "src/theme";

export const WelcomeModal: React.FC<CUSTOM_MODAL_COMPONENT_PROPS> = ({
  onCancel,
  name,
}) => {
  return (
    <XYCenter style={{ flexDirection: "column" }}>
      <EmojiSmileSlight24Regular
        style={{
          fontSize: "20px",
          color: theme.colors.themeColors.warning,
        }}
      />
      <CustomText
        as="h3"
        style={{ textAlign: "center", padding: "10px", fontSize: "20px" }}
      >
        Welcome, {name}!
      </CustomText>
      <CustomButton onClick={onCancel as any}>Continue</CustomButton>
    </XYCenter>
  );
};
