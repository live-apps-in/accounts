import { AuthPageContent } from "src/content/auth";
import { authConfig } from "src/config";
import { Guest } from "src/guard";
import { AuthLayout } from "src/layouts";
import { ROUTES_DEFINITION } from "../router";
import { Helmet } from "react-helmet";

export const authRoutes: ROUTES_DEFINITION = [
  {
    path: authConfig.authPage,
    element: (
      <>
        <Helmet>
          <title>Accounts - Auth</title>
        </Helmet>
        <Guest>
          <AuthLayout>
            <AuthPageContent />
          </AuthLayout>
        </Guest>
      </>
    ),
  },
];
