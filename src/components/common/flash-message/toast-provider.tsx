// import { Alert, AlertProps } from "@fluentui/react-components/unstable";
import {
  DefaultToast,
  ToastProps,
  ToastProvider,
  ToastProviderProps,
} from "react-toast-notifications";
import { CustomText } from "../custom-text";

const CustomToast = (props: ToastProps) => {
  return (
    <DefaultToast {...props}>
      <CustomText as="p">{props.children}</CustomText>
    </DefaultToast>
  );
};
// const CustomToast = (props: AlertProps) => {
//   console.log(props);
//   return <Alert intent="success">{props.children}</Alert>;
// };

// TODO: use Alert component
export const AlertProvider: React.ComponentType<ToastProviderProps> = (
  props
) => {
  return (
    <ToastProvider
      {...props}
      autoDismissTimeout={2000}
      autoDismiss
      newestOnTop
      placement="bottom-right"
      components={{ Toast: CustomToast, ...props?.components }}
    >
      {props.children}
    </ToastProvider>
  );
};
