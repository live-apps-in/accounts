import { HomePageContent } from "src/content";
import { ROUTE_DEFINITION } from "src/routes";
import { Authenticated } from "src/guard";
import { AuthLayout } from "src/layouts";
import { PageNotFound } from "src/components";
import { routeDefinition } from "./definition";
import { navigationLinks } from "./navigation-links";
import { Helmet } from "react-helmet";
import { projectConfig } from "src/config";

export const routes: ROUTE_DEFINITION[] = [
  {
    path: "/",
    element: (
      <>
        <Helmet>
          <title>{projectConfig.title}</title>
        </Helmet>
        <Authenticated>
          <AuthLayout>
            <HomePageContent />
          </AuthLayout>
        </Authenticated>
      </>
    ),
  },
  {
    path: "/",
    children: [...routeDefinition.auth],
  },
  {
    path: "/",
    children: [...routeDefinition.userRole],
  },
  {
    path: "/",
    children: [...routeDefinition.admin],
  },
  ...routeDefinition.public,
  {
    path: "/404",
    element: (
      <>
        <Helmet>
          <title>Page not found</title>
        </Helmet>
        <PageNotFound />
      </>
    ),
  },
  {
    path: "*",
    element: (
      <>
        <Helmet>
          <title>Page not found</title>
        </Helmet>
        <PageNotFound />
      </>
    ),
  },
  // for other roles/categories use the below routing format
  // {
  //   path: "/other",
  //   children: [{ path: "/other", element: <div>Other</div> }],
  // },
];

export { navigationLinks };

export * from "./router";
export * from "./definition";
