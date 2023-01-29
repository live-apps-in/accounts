// All the model definitions for the app other than the models of reusables goes here
// In other words, app-specific model definitions goes here

import { FLASH_EVENT_PROPS, MODAL_EVENT_PROPS } from "src/components";
import { AUTH_PROVIDER } from "src/data";

// redux
// #rbac-setup
export type ROLE = "donor" | "admin";

export interface AUTH_DATA {
  name: string;
  email: string;
  token: string;
  role: ROLE;
  _id?: string;
  image?: string | null;
}

// data resolved from social auth services
export type O_AUTH_DATA = {
  token: string;
  provider: AUTH_PROVIDER;
};

export interface AUTH_STATE {
  isInitialized: boolean;
  isAuthenticated: boolean;
  data: AUTH_DATA | null;
}

export interface INITIALIZE_ACTION {
  isAuthenticated: boolean;
  data: AUTH_DATA | null;
}

// users
export interface USER_STATE {
  profile: USER_PROFILE;
}

export interface USER_PROFILE {
  donor_registered?: boolean;
}

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

export interface USE_O_AUTH_RETURN_TYPE extends AUTH_STATE {
  initialize: (options?: USE_AUTH_OPTIONS) => Promise<AUTH_DATA>;
  authenticate: () => Promise<AUTH_DATA>;
  logout: (options?: USE_AUTH_OPTIONS) => Promise<void>;
  getOAuthUrl: (provider: AUTH_PROVIDER) => string;
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
