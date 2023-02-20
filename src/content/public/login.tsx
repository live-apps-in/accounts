import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  CONFIG_TYPE,
  CustomButton,
  CustomCard,
  CustomText,
  RecursiveContainer,
  XYCenter,
} from "src/components";
import { authConfig } from "src/config";
import { useAccountsAuth } from "src/hooks";
import { layoutSettings } from "src/layouts/public/layout-settings";
import { liveAppsAccountsPortalSigninSchema } from "src/schema";
import {
  appendSearchString,
  getSearchQuery,
  handleError,
  styled,
} from "src/utils";
import { ACCOUNT_SESSIONS, LIVE_APPS_URL_QUERY_DATA } from "src/model";
import { Sessions } from "./components";
import { CursorClick24Regular } from "@fluentui/react-icons";

const StyledLoginPageWrapper = styled(XYCenter)`
  width: 100%;
  height: calc(100vh - ${layoutSettings.header.height});
`;

const StyledCustomCard = styled(CustomCard)`
  width: 90%;
  max-width: 500px;
  padding: 30px 50px;
  border-radius: 20px;
  margin-top: -${layoutSettings.header.height};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  form > div {
    width: 100%;
  }
  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const StyledFooterContainer = styled(XYCenter)`
  flex-wrap: wrap;
  gap: 10px;
`;

export const LoginPortalContent: React.FC = () => {
  const [submitting, setSubmitting] = useState(false);
  const { search } = useLocation();
  const searchQuery = getSearchQuery(
    search
  ) as unknown as LIVE_APPS_URL_QUERY_DATA;
  const navigate = useNavigate();
  const { login } = useAccountsAuth();
  const [error, setError] = useState(null);
  const sessions: ACCOUNT_SESSIONS = JSON.parse(
    localStorage.getItem("sessions") || "[]"
  );
  const [isSessions, setIsSessions] = useState(sessions.length > 0);

  useEffect(() => {
    if (!searchQuery?.redirectUrl) {
      setError("Redirect Url is required in search query");
    }
  }, [searchQuery]);

  const handleSubmit = async (details) => {
    setSubmitting(true);
    try {
      await login(details);
      window.flash({ message: "OTP sent successfully" });
      const navigateUrl = `${authConfig.liveAppsTwoFactorAuthenticationPage.replace(
        ":email",
        details.email
      )}${search}`;
      navigate(navigateUrl);
    } catch (err) {
      handleError(err);
    }
    setSubmitting(false);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: handleSubmit,
    validationSchema: liveAppsAccountsPortalSigninSchema,
  });

  const config: CONFIG_TYPE = [
    {
      name: "email",
      type: "email",
      placeholder: "Live-apps Email",
      appearance: "underline",
      style: { margin: "15px auto" },
    },
  ];

  const toggleSessions = (isSession) => setIsSessions(isSession);

  return (
    <StyledLoginPageWrapper>
      <StyledCustomCard
        header={
          <CustomText align="center" as="h3">
            Signin with Live Apps email
          </CustomText>
        }
      >
        {error ? (
          <CustomText as="h3">{error}</CustomText>
        ) : isSessions ? (
          <Sessions sessions={sessions} toggleSessions={toggleSessions} />
        ) : (
          <>
            <form onSubmit={formik.handleSubmit}>
              <RecursiveContainer
                config={config}
                formik={formik}
                validationSchema={liveAppsAccountsPortalSigninSchema}
              />
              <CustomButton type="submit" loading={submitting}>
                Signin with Live apps
              </CustomButton>
            </form>
            <StyledFooterContainer>
              {sessions.length > 0 && (
                <CustomButton
                  icon={<CursorClick24Regular />}
                  appearance="outline"
                  onClick={() => toggleSessions(true)}
                >
                  Choose Account
                </CustomButton>
              )}
              <CustomButton
                buttonType="link"
                href={`${authConfig.liveAppsSignupPage}?${appendSearchString([
                  search,
                  { signup: true },
                ])}`}
              >
                Signup with a New Account
              </CustomButton>
            </StyledFooterContainer>
          </>
        )}
      </StyledCustomCard>
    </StyledLoginPageWrapper>
  );
};
