import { adminLayoutNavigationLinks } from "./admin";
import { authLayoutNavigationLinks } from "./auth";
import { userRoleLayoutNavigationLinks } from "./user-role";

export const navigationLinks = {
  authLayout: authLayoutNavigationLinks,
  adminLayout: adminLayoutNavigationLinks,
  userRole: userRoleLayoutNavigationLinks,
};

// all the navigation links exported here are layout-specific
