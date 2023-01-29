import { Card, CardProps } from "@fluentui/react-components/unstable";
import {
  CheckmarkCircle24Filled,
  ErrorCircle24Filled,
  FluentIconsProps,
  Info24Filled,
  Warning24Filled,
} from "@fluentui/react-icons";
import styled from "styled-components";
import { CustomText, CUSTOM_TEXT_PROPS } from "./custom-text";

export interface CUSTOM_MESSAGE_PROPS {
  variant?: "info" | "success" | "warning" | "error" | "default";
  message?: React.ReactNode;
  containerProps?: CardProps;
  hideContainer?: boolean;
  iconProps?: FluentIconsProps;
  messageProps?: CUSTOM_TEXT_PROPS;
  children?: React.ReactNode;
}

const StyledCustomMessageWrapper = styled(Card)`
  display: grid;
  grid-template-columns: 30px auto;
  align-items: center;
  gap: 2px;
  > .icon-container {
    display: grid;
    place-items: center;
    padding: 3px;
  }
`;

export const CustomMessage = (props: CUSTOM_MESSAGE_PROPS) => {
  const {
    iconProps,
    containerProps,
    hideContainer = false,
    message = "",
    variant = "default",
    messageProps,
    children,
  } = props;
  const badge = {
    success: <CheckmarkCircle24Filled {...iconProps} />,
    info: <Info24Filled {...iconProps} />,
    warning: <Warning24Filled {...iconProps} />,
    error: <ErrorCircle24Filled {...iconProps} />,
    default: null,
  };

  return (
    <StyledCustomMessageWrapper
      {...containerProps}
      style={{
        ...containerProps?.style,
        ...(hideContainer ? { padding: 0, boxShadow: "none" } : {}),
      }}
    >
      {badge[variant] && <div className="icon-container">{badge[variant]}</div>}
      {(message || children) && (
        <CustomText {...messageProps}>{message || children}</CustomText>
      )}
    </StyledCustomMessageWrapper>
  );
};
