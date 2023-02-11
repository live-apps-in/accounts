// import { THEME_NAMES } from "src/theme";

export const authConfig = {
  authPage: "/auth", // exact page where the user will be redirected if not loggedin
  liveAppsPortal: process.env.REACT_APP_LIVE_APPS_PORTAL,
  liveAppsLoginPage: "/oauth/login",
  liveAppsSignupPage: "/oauth/signup",
  liveAppsTwoFactorAuthenticationPage: "/oauth/2fa/send_otp/:email",
  homePage: "/",
  tokenAccessor: "token",
  refreshTokenAccessor: "refreshToken",
};

export const projectConfig = {
  title: "Live Apps - Accounts",
  description: "Authentication service for apps under live apps",
  defaultTheme: "pure-light-theme",
  defaultPhonenumberCountry: "IN" as any,
  appBaseurl: window.location.origin,
  // defaultTheme: THEME_NAMES.PureLightTheme,
};

export const gatewayConfig = {
  default: process.env.REACT_APP_BASE_URL,
};

export const platformConfig = {
  accounts: "accounts",
  ping: "ping",
};

// #rbac-setup
export const rbacConfig = {
  roles: ["admin"],
  homePage: {
    auth: "/auth",
    admin: "/admin",
    // undefined: "/", // incase of user role is undefined
  },
  // publicRoutes: ["/verification"], // pages that doesn't need authentication to be displayed on the screen
  authRoutes: ["/auth", "/auth/login"], // pages that are used for authentication purposes
};

// msal
export const msalErrorMessage = {
  interaction_in_progress: "A popup is already open",
  user_cancelled: "Authentication Cancelled",
};
