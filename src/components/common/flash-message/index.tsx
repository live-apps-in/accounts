import { EventEmitter } from "src/utils";
import { useEffect } from "react";
// import { Alert, AlertProps } from "@fluentui/react-components/unstable";
// import styled from "styled-components";
import { useToasts, Options } from "react-toast-notifications";

// flash event
export interface FLASH_EVENT_PROPS extends Options {
  // extends AlertProps
  message?: React.ReactNode;
  //   containerProps?: React.DetailedHTMLProps<
  //     React.HTMLAttributes<HTMLDivElement>,
  //     HTMLDivElement
  //   >;
}

// const StyledAlertWrapper = styled("div")`
//   position: fixed;
//   bottom: 5px;
//   right: 10px;
//   z-index: 100;
// `;

export const FlashMessage: React.FC = () => {
  const { addToast } = useToasts();

  useEffect(() => {
    // TODO: use Alert component
    const flashMessageListener = (params: FLASH_EVENT_PROPS) => {
      const { message, ...restParams } = params;
      addToast(message, {
        autoDismiss: true,
        appearance: "success",
        ...restParams,
      });
    };
    EventEmitter.addListener("flash", flashMessageListener);
    return () => {
      EventEmitter.removeListener("flash", flashMessageListener);
    };
  }, []);

  return null;
};

export * from "./toast-provider";
