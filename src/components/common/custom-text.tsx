// import { customizedTheme as theme } from "src/theme";
import { Label, LabelProps, Text, TextProps } from "@fluentui/react-components";
import { To, LinkProps } from "react-router-dom";
import { customizedTheme as theme } from "src/theme";
import styled from "styled-components";
import { CustomLink } from "./custom-link";

interface TEXT_PROPS {
  color?:
    | "primary"
    | "secondary"
    | "error"
    | "warning"
    | "success"
    | "info"
    | "black"
    | "default";
  style?: TextProps["style"];
  align?: "center" | "left" | "right";
  href?: To;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "pre" | "span" | "label";
  linkProps?: Omit<LinkProps, "to">;
}

export type CUSTOM_TEXT_PROPS<as = TEXT_PROPS["as"]> = TEXT_PROPS &
  (as extends "label" ? LabelProps : Omit<TextProps, "align" | "as">);

const styleFunction = (props) => ({
  ...theme.components[props.as],
  color: theme.colors.themeColors[props.color],
  textAlign: props.align,
  ...props.style,
});

const StyledText = styled(Text)(styleFunction);

const StyledLabel = styled((props) => <Label {...props} />)(styleFunction);

const StyledLink = styled(CustomLink)(() => theme.components.link);

export const CustomText: React.FC<CUSTOM_TEXT_PROPS> = ({
  color = "default",
  as = "p",
  children,
  href,
  linkProps,
  ...rest
}) => {
  const Wrapper = href ? StyledLink : (props: any) => <>{props.children}</>;

  let Component = StyledText;

  if (as === "label") Component = StyledLabel;

  return (
    <Wrapper {...linkProps} to={href}>
      <Component {...(rest as any)} as={as} color={color}>
        {children}
      </Component>
    </Wrapper>
  );
};
