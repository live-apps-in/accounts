// import { customizedTheme as theme } from "src/theme";
import { CustomText, CUSTOM_TEXT_PROPS } from "src/components";
import styled from "styled-components";
import { customizedTheme as theme } from "src/theme";

interface FORM_FIELD_MESSAGE {
  message?: string | React.ReactNode | null;
  type?: "error" | "info" | "description";
}

export type CUSTOM_FORM_FIELD_MESSAGE = FORM_FIELD_MESSAGE & CUSTOM_TEXT_PROPS;

const colors = {
  error: theme.colors.themeColors.error,
  info: theme.colors.themeColors.info,
  description: theme.colors.themeColors.default,
};

const StyledCustomTextWrapper = styled((props) => <CustomText {...props} />)(
  (props) => ({
    ...props.style,
    color: colors[props.type],
  })
);

export const CustomFormFieldMessage: React.FC<CUSTOM_FORM_FIELD_MESSAGE> = (
  props
) => {
  const { message, type = "error", ...textProps } = props;

  return (
    <StyledCustomTextWrapper
      {...textProps}
      as="p"
      style={{ ...textProps.style, margin: 0 }}
      type={type}
    >
      {props.children || message}
    </StyledCustomTextWrapper>
  );
};
