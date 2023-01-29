import { useEffect, useState } from "react";
import {
  Dialog,
  DialogSurface,
  DialogProps,
  DialogSurfaceProps,
} from "@fluentui/react-components/unstable";
import { EventEmitter } from "src/utils";
import { ConfirmationModal, CONFIRMATION_MODAL_PROPS } from "src/components";
import styled from "styled-components";

export interface CUSTOM_MODAL_COMPONENT_PROPS {
  [key: string]: any;
  onCancel: (
    event?:
      | React.MouseEventHandler<HTMLButtonElement>
      | React.MouseEventHandler<HTMLAnchorElement>
  ) => any;
}
export type CUSTOM_MODAL_COMPONENT = React.FC<CUSTOM_MODAL_COMPONENT_PROPS>;

// modal event

interface CONTAINER_PROPS extends Omit<DialogProps, "open" | "children"> {
  closeOnOutsideClick?: boolean;
  children?: React.ReactNode;
}

interface COMMON_MODAL_PROPS {
  containerProps?: CONTAINER_PROPS;
  contentContainerProps?: DialogSurfaceProps;
}

export interface MODAL_EVENT_PROPS_1 extends COMMON_MODAL_PROPS {
  component?: CUSTOM_MODAL_COMPONENT;
  type?: "custom";
}

export interface MODAL_EVENT_PROPS_2
  extends CONFIRMATION_MODAL_PROPS,
    COMMON_MODAL_PROPS {
  type?: "confirmation";
}

export type MODAL_EVENT_PROPS = MODAL_EVENT_PROPS_1 | MODAL_EVENT_PROPS_2;

const StyledDialogSurface = styled(DialogSurface)`
  display: block;
`;

export const CustomModal = () => {
  const [modalDetails, setModalDetails] = useState<MODAL_EVENT_PROPS>({});
  const [visible, setVisible] = useState(false);
  //   const visibleRef = useRef(null);

  useEffect(() => {
    EventEmitter.addListener("modal", (params: MODAL_EVENT_PROPS) => {
      setModalDetails({ ...params, type: params.type || "custom" });
      setVisible(true);
    });
  }, []);

  let ModalBody = null;
  if (modalDetails.type === "custom") ModalBody = modalDetails.component;
  if (modalDetails.type === "confirmation") {
    const {
      type: _type,
      containerProps: _containerProps,
      ...confirmationModalProps
    } = modalDetails;
    ModalBody = function ModalBody(params) {
      return (
        <ConfirmationModal
          {...params}
          {...confirmationModalProps}
          style={{
            minWidth: 500,
            // ...confirmationModalProps?.sx
          }}
          onConfirm={async (event) => {
            if (confirmationModalProps.onConfirm)
              await confirmationModalProps.onConfirm(event);
            setVisible(false);
          }}
          onCancel={async (event) => {
            if (confirmationModalProps.onCancel)
              await confirmationModalProps.onCancel(event);
            setVisible(false);
          }}
        />
      );
    };
  }

  return (
    <Dialog
      {...modalDetails.containerProps}
      open={visible}
      onOpenChange={
        modalDetails.containerProps?.closeOnOutsideClick
          ? (_event, data) => setVisible(data.open)
          : undefined
      }
    >
      <StyledDialogSurface
        aria-label="label"
        {...modalDetails.contentContainerProps}
      >
        {ModalBody && <ModalBody onCancel={() => setVisible(false)} />}
      </StyledDialogSurface>
    </Dialog>
  );
};
