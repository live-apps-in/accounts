import axios, { AxiosError } from "axios";
import { msalErrorMessage } from "src/config";
import { BrowserAuthError } from "@azure/msal-browser";

export const getError = (errorObject?: Error | AxiosError) => {
  let error: any = {
    message: "Failed to process your request",
    data: {},
    status: null,
    statusText: null,
  };

  if (errorObject) {
    if (axios.isAxiosError(errorObject)) {
      const status = errorObject.response?.status;
      if (status === 404) {
        error = {
          ...errorObject.response,
          message: "Failed to process your request",
          status: 404,
        };
      } else {
        error = {
          ...errorObject.response,
          message: `${
            errorObject.message ||
            errorObject.response?.data ||
            // errorObject.response?.data?.message ||
            "Failed to process your request"
          }`,
        };
      }
      return error;
    } else {
      return errorObject;
    }
  }
  return error;
};

export const withUploadProgress = (callBack: Function) => {
  return {
    onUploadProgress: function (progressEvent: any) {
      const percentCompleted = Math.round(
        (progressEvent.loaded * 100) / progressEvent.total
      );
      callBack(percentCompleted);
    },
  };
};

export async function createApiFunction(
  apiCall: Function,
  successCallback?: any,
  errorCallback?: any
) {
  try {
    const response = await apiCall();
    if (successCallback) {
      return successCallback(response);
    }
    return response.data;
  } catch (err) {
    if (errorCallback) return errorCallback(err);
    throw err;
  }
}

export async function handleError(error = null, customFunction?: Function) {
  if (error) {
    if (customFunction) customFunction(error);
    window.flash({ message: getError(error).message, appearance: "error" });
  } else {
    window.flash({ message: getError().message, appearance: "error" });
  }
}

export function convertMsalError(error) {
  if (error && error instanceof BrowserAuthError) {
    const newError = new Error(
      msalErrorMessage[getError(error).errorCode] ||
        "Failed to process your request"
    );
    return newError;
  }
  return error;
}

export async function rejectError(_error?: any) {
  return;
}
