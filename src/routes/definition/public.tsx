import { ROUTES_DEFINITION } from "src/routes";
import { Helmet } from "react-helmet";
import { PublicLayout } from "src/layouts";
import {
  LoginPortalContent,
  OTPPortal,
  SignupPortalContent,
} from "src/content/public";
import { authConfig } from "src/config";

export const publicRoutes: ROUTES_DEFINITION = [
  {
    path: authConfig.liveAppsLoginPage,
    element: (
      <>
        <Helmet>
          <title>Accounts LiveApps - Login</title>
        </Helmet>
        <PublicLayout>
          <LoginPortalContent />
        </PublicLayout>
      </>
    ),
  },
  {
    path: authConfig.liveAppsSignupPage,
    element: (
      <>
        <Helmet>
          <title>Accounts LiveApps - Signup</title>
        </Helmet>
        <PublicLayout>
          <SignupPortalContent />
        </PublicLayout>
      </>
    ),
  },
  {
    path: authConfig.liveAppsTwoFactorAuthenticationPage,
    element: (
      <>
        <Helmet>
          <title>Accounts LiveApps - 2FA</title>
        </Helmet>
        <PublicLayout>
          <OTPPortal />
        </PublicLayout>
      </>
    ),
  },
];
