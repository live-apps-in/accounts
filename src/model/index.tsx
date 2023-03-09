// All the model definitions for the app other than the models of reusables goes here
// In other words, app-specific model definitions goes here

import { FLASH_EVENT_PROPS, MODAL_EVENT_PROPS } from "src/components";

// redux
// #rbac-setup
export type ROLE = "admin";

export interface AUTH_DATA {
  role: ROLE;
  apps: {
    ping: { isActive: boolean; userId: string };
  };
  id: string;
  email: string;
  name: string;
  platform: "ping" | "accounts";
  image?: string | null;
}

export interface AUTH_STATE {
  isInitialized: boolean;
  isAuthenticated: boolean;
  data: AUTH_DATA | null;
}

export interface INITIALIZE_ACTION {
  isAuthenticated: boolean;
  data: AUTH_DATA | null;
}

export type API_HEADER_AUTH_DETAILS = {
  token: string;
  refreshToken: string;
};

// users
export interface USER_STATE {
  profile?: USER_PROFILE | null;
}

export interface USER_PROFILE extends AUTH_DATA {}

// hooks
// auth
export interface USE_AUTH_OPTIONS {
  updateRedux?: boolean;
}

export type LOGIN_AUTH_PROPS = {
  email: string;
  password: string;
};

export interface USE_AUTH_PARAMS {
  isOAuth?: boolean;
}

export interface USE_AUTH_RETURN_TYPE extends AUTH_STATE {
  initialize: (options?: USE_AUTH_OPTIONS) => Promise<AUTH_DATA>;
  login: (
    loginData?: LOGIN_AUTH_PROPS,
    options?: USE_AUTH_OPTIONS
  ) => Promise<AUTH_DATA>;
  logout: (options?: USE_AUTH_OPTIONS) => Promise<void>;
}

// ---------------------------------------------------------------- //

// live apps auth
//.. login
export type LIVE_APPS_LOGIN_DETAILS = {
  email: string;
};

//.. signup
export type LIVE_APPS_SIGNUP_DETAILS = {
  name: string;
  email: string;
};

//.. validate OTP details
export type LIVE_APPS_VALIDATE_OTP_DETAILS = {
  email: string;
  otp: string;
};

//.. validate OTP response
export type LIVE_APPS_VALIDATE_OTP_RESPONSE = {
  refreshToken: string;
  token: string;
};

// query details from the webpage url
export type LIVE_APPS_URL_QUERY_DATA = {
  redirectUrl: string;
  signup?: boolean;
};

// query details to be present while the authentication flow
export type ACCOUNTS_AUTH_FLOW_QUERY_DATA = {
  backToURL?: string;
} & LIVE_APPS_URL_QUERY_DATA &
  API_HEADER_AUTH_DETAILS;

// ---------------------------------------------------------------- //

// accounts session stored in local storage
export type ACCOUNTS_SESSION_DETAILS = {
  name?: string;
  email?: string;
  image?: string | null;
};

export type ACCOUNT_SESSIONS = ACCOUNTS_SESSION_DETAILS[];

export interface EXAMPLE_API_RESPONSE {
  test?: "test";
}

// global declarations goes here
declare global {
  interface Window {
    flash: (params: FLASH_EVENT_PROPS) => any;
    modal: (params: MODAL_EVENT_PROPS) => any;
  }
}

// to avoid the children typing error for QueryClientProvider -- https://github.com/TanStack/query/issues/3476#issuecomment-1092424508
declare module "react-query/types/react/QueryClientProvider" {
  interface QueryClientProviderProps {
    children?: React.ReactNode;
  }
}

// ---------------------------------------------------------------- //

export * from "./custom-models";
