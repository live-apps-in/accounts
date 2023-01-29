import {
  authActions,
  userActions,
  // themeActions
} from "./slices";

// TODO: maintain theme object in store

export const actions = {
  authActions: { ...authActions },
  userActions: { ...userActions },
  // theme: { ...themeActions },
};
