import axios, { AxiosError } from "axios";
import { getCookie } from "src/utils";
import { authSetup, msalErrorMessage, projectSetup } from "src/data";
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

// refer https://github.com/live-apps-in/ping-client/blob/main/src/api/gateway/default-gateway.ts for refresh token concept
// creating axios instance
export const axiosInstance = axios.create({
  baseURL: projectSetup.baseURL,
});

// setting token in header for each request
axiosInstance.interceptors.request.use(
  (config) => {
    const token = getCookie(authSetup.tokenAccessor); // getting token from cookies
    if (token && config.headers)
      config.headers["Authorization"] = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// globally logout the user, if 401 occurs
// axiosInstance.interceptors.response.use(undefined, async (error) => {
//   // logout if unauthenticated or token expired
//   if (error.response?.status === 401) {
//     // don't redirect to logout route if the current page is a public page or login page
//     if (
//       !isPublicRoute(window.location.pathname) &&
//       !isAuthRoute(window.location.pathname)
//     ) {
//       deleteCookie('token');
//       window.location.pathname = '/auth/login';
//     }
//     //   window.location.href = '/logout';
//   }
//   return Promise.reject(error);
// });

// configuration to get upload progress(in percentage)

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
