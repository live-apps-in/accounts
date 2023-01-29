import { adminRoutes } from "./admin";
import { authRoutes } from "./auth";
import { publicRoutes } from "./public";
import { userRoleRoutes } from "./user-role";

export const routeDefinition = {
  auth: authRoutes,
  admin: adminRoutes,
  userRole: userRoleRoutes,
  public: publicRoutes,
};
