import styled from "styled-components";
import { To, useNavigate } from "react-router-dom";
import { customizedTheme as theme, STYLES } from "src/theme";
import {
  Button,
  CompoundButton,
  ButtonProps,
  Spinner,
} from "@fluentui/react-components";
import { capitalize, navigateToUrl } from "src/utils";

// apply style objects for the component
// reference - https://styled-components.com/docs/advanced#style-objects

const getButtonStyle = (appearance, size = "medium") => ({
  ...theme.components[`${capitalize(appearance)}Button`],
  ...{
    ...theme.components.customButtonStyleBasedOnSize[
      size === null ? "noSize" : size
    ],
  },
});

const StyledButton = styled(Button)((props) => {
  const buttonStyle = getButtonStyle(props.appearance, props.size);
  return {
    ...buttonStyle,
    ...(!!props.shape && { borderRadius: undefined }),
    ...(!!props.socialName && getButtonStyle(props.socialName, props.size)),
    ...(!!props.fullWidth && { width: "100%" }),
  };
});
const StyledCompoundButton = styled(CompoundButton)((props) => {
  const buttonStyle = getButtonStyle(props.appearance, props.size);
  return {
    ...buttonStyle,
    ...(!!props.shape && { borderRadius: undefined }),
    ...(!!props.socialName && getButtonStyle(props.socialName, props.size)),
    ...(!!props.fullWidth && { width: "100%" }),
  };
});
const StyledLinkButton = styled(Button)((props) => {
  const buttonStyle = theme.components.LinkButton;
  return {
    ...buttonStyle,
    ...(!!props.shape && { borderRadius: undefined }),
    ...(!!props.socialName && getButtonStyle(props.socialName, props.size)),
    ...(!!props.fullWidth && { width: "100%" }),
  };
});

// custom-button props
export interface NavigateOptions {
  replace?: boolean;
  state?: any;
  target?: "_blank";
}

export type HREF =
  | string
  | {
      to: To;
      options?: NavigateOptions;
    };

export interface CUSTOM_BUTTON_PROPS
  extends Omit<ButtonProps, "href" | "appearance"> {
  loading?: boolean | null;
  buttonType?: "button" | "compound" | "link";
  href?: HREF;
  styles?: STYLES;
  fullWidth?: boolean;
  appearance?: "secondary" | "primary" | "outline" | "subtle" | "transparent";
  socialName?: "google" | "facebook" | "twitter" | "instagram" | "linkedin";
}

export const CustomButton: React.FC<CUSTOM_BUTTON_PROPS> = (props) => {
  const navigate = useNavigate();
  const {
    loading,
    href,
    buttonType = "button",
    appearance = "primary",
    fullWidth = false,
    socialName,
    ...rest
  } = props;

  const buttonStyleDependencies = { appearance, fullWidth, socialName };

  const goto = (route: CUSTOM_BUTTON_PROPS["href"]) => {
    if (route) {
      if (typeof route === "string") navigate(route);
      else if ("to" in route) {
        if (route?.options?.target === "_blank")
          navigateToUrl(`${route.to}`, "_blank");
        else navigate(route.to, route.options);
      } else navigate(route);
    }
  };

  // apply styles
  const ButtonTypes = {
    button: (buttonProps) => (
      <StyledButton {...buttonProps} {...buttonStyleDependencies} />
    ),
    compound: (buttonProps) => (
      <StyledCompoundButton {...buttonProps} {...buttonStyleDependencies} />
    ),
    link: (buttonProps) => (
      <StyledLinkButton {...buttonProps} {...buttonStyleDependencies} />
    ),
  };

  const ButtonComponent = ButtonTypes[buttonType];
  return (
    <ButtonComponent
      icon={loading ? <Spinner appearance="inverted" size="tiny" /> : null}
      {...rest}
      appearance={appearance}
      disabled={loading || props.disabled}
      onClick={href ? () => goto(href) : rest.onClick}
      href={undefined}
    >
      {rest.children}
    </ButtonComponent>
  );
};
