// import { THEME_NAMES } from "src/theme";

export const authSetup = {
  authPage: "/auth", // exact page where the user will be redirected if not loggedin
  oauthPage: "/auth/oauth/:provider",
  signupPage: "/auth/signup",
  homePage: "/",
  tokenAccessor: "token",
};

export const projectSetup = {
  title: "Project Title",
  baseURL: process.env.REACT_APP_BASE_URL,
  defaultTheme: "pure-light-theme",
  defaultPhonenumberCountry: "IN" as any,
  // defaultTheme: THEME_NAMES.PureLightTheme,
};

// #rbac-setup
export const rbacSetup = {
  roles: ["userRole"],
  homePage: {
    auth: "/auth",
    admin: "/admin",
    userRole: "/user-role",
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
