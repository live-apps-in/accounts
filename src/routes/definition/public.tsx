import { SubRoutePublic } from "src/content/public";
import { Public } from "src/guard";
import { AuthLayout } from "src/layouts";
import { ROUTES_DEFINITION } from "src/routes";
import { Helmet } from "react-helmet";

export const publicRoutes: ROUTES_DEFINITION = [
  {
    path: "/public_page",
    element: (
      <>
        <Helmet>
          <title>Public Page</title>
        </Helmet>
        <Public>
          <AuthLayout>
            <SubRoutePublic />
          </AuthLayout>
        </Public>
      </>
    ),
  },
  {
    path: "/public_page/sub_route",
    element: (
      <>
        <Helmet>
          <title>Sub Route - Public</title>
        </Helmet>
        <Public>
          <AuthLayout>
            <SubRoutePublic />
          </AuthLayout>
        </Public>
      </>
    ),
  },
];
