import { ROUTES_DEFINITION } from "../router";
import { Helmet } from "react-helmet";
import { Authenticated } from "src/guard";
import { SubRouteUserRole, UserRolePageContent } from "src/content/user-role";

export const userRoleRoutes: ROUTES_DEFINITION = [
  {
    path: "/user_role",
    element: (
      <>
        <Helmet>
          <title>User Role</title>
        </Helmet>
        <Authenticated roles={["userRole"]}>
          <UserRolePageContent />
        </Authenticated>
      </>
    ),
  },
  {
    path: "/user_role/sub_route",
    element: (
      <>
        <Helmet>
          <title>Sub Route - User</title>
        </Helmet>
        <Authenticated roles={["userRole"]}>
          <SubRouteUserRole />
        </Authenticated>
      </>
    ),
  },
];
