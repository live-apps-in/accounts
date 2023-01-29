import { WarningFilled } from "@fluentui/react-icons";
import { CustomButton, CUSTOM_BUTTON_PROPS } from "src/components";
import styled from "styled-components";
import { useState } from "react";
import { CustomText } from "src/components";
import { customizedTheme as theme } from "src/theme";

export interface CONFIRMATION_MODAL_PROPS {
  onConfirm?: (
    event?:
      | React.MouseEventHandler<HTMLButtonElement>
      | React.MouseEventHandler<HTMLAnchorElement>
  ) => any;
  onCancel?: (
    event?:
      | React.MouseEventHandler<HTMLButtonElement>
      | React.MouseEventHandler<HTMLAnchorElement>
  ) => any;
  title?: JSX.Element | string | null;
  description?: JSX.Element | string | null;
  confirmButton?:
    | JSX.Element
    | { label: any; props?: CUSTOM_BUTTON_PROPS }
    | null;
  cancelButton?:
    | JSX.Element
    | { label: any; props?: CUSTOM_BUTTON_PROPS }
    | null;
}

const ConfirmationModalWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
  width: 100%;
`;

export const ConfirmationModal: React.FC<CONFIRMATION_MODAL_PROPS> = (
  props
) => {
  const {
    onConfirm,
    onCancel,
    title,
    description,
    confirmButton = { label: "Yes" },
    cancelButton = { label: "No" },
  } = props;

  const [confirmButtonLoading, setConfirmButtonLoading] = useState(false);
  const [cancelButtonLoading, setCancelButtonLoading] = useState(false);

  const getConfirmButton = (
    confirmButton: CONFIRMATION_MODAL_PROPS["confirmButton"]
  ) => {
    if (typeof confirmButton === "object" && "label" in confirmButton)
      return (
        <CustomButton
          loading={confirmButtonLoading}
          {...confirmButton.props}
          onClick={async (event) => {
            setConfirmButtonLoading(true);
            if (onConfirm) await onConfirm(event);
            if (confirmButton.props?.onClick)
              await confirmButton.props?.onClick(event);
            setConfirmButtonLoading(false);
          }}
        >
          {confirmButton.label || "Yes"}
        </CustomButton>
      );
    else if (confirmButton) return confirmButton;
    else return null;
  };
  const getCancelButton = (
    cancelButton: CONFIRMATION_MODAL_PROPS["cancelButton"]
  ) => {
    if (typeof cancelButton === "object" && "label" in cancelButton)
      return (
        <CustomButton
          loading={cancelButtonLoading}
          appearance={"transparent"}
          {...cancelButton.props}
          onClick={async (event) => {
            setCancelButtonLoading(true);
            if (onCancel) await onCancel(event);
            if (cancelButton.props?.onClick)
              await cancelButton.props?.onClick(event);
            setCancelButtonLoading(false);
          }}
        >
          {cancelButton.label || "No"}
        </CustomButton>
      );
    else if (cancelButton) return cancelButton;
    else return null;
  };

  return (
    <ConfirmationModalWrapper>
      <WarningFilled
        style={{
          fontSize: "20px",
          color: theme.colors.themeColors.warning,
        }}
      />
      <CustomText
        as="h3"
        style={{ textAlign: "center", padding: "10px", fontSize: "20px" }}
      >
        {title || "Are you sure ?"}
      </CustomText>

      {description && (
        <CustomText as="p" style={{ textAlign: "center", padding: "5px 10px" }}>
          {description}
        </CustomText>
      )}

      <div style={{ marginTop: "5px" }}>
        {getConfirmButton(confirmButton)}
        {getCancelButton(cancelButton)}
      </div>
    </ConfirmationModalWrapper>
  );
};
