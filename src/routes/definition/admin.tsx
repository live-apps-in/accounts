import { AdminPageContent, SubRouteAdmin } from "src/content/admin";
import { Authenticated } from "src/guard";
import { AdminLayout } from "src/layouts";
import { ROUTES_DEFINITION } from "src/routes";
import { Helmet } from "react-helmet";

export const adminRoutes: ROUTES_DEFINITION = [
  {
    path: "/admin",
    element: (
      <>
        <Helmet>
          <title>Admin</title>
        </Helmet>
        <Authenticated roles={["admin"]}>
          <AdminLayout>
            <AdminPageContent />
          </AdminLayout>
        </Authenticated>
      </>
    ),
  },
  {
    path: "/admin/sub_route",
    element: (
      <>
        <Helmet>
          <title>Sub Route - Admin</title>
        </Helmet>
        <Authenticated roles={["admin"]}>
          <AdminLayout>
            <SubRouteAdmin />
          </AdminLayout>
        </Authenticated>
      </>
    ),
  },
];
