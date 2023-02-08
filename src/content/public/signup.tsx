import { useFormik } from "formik";
import { useState, useEffect } from "react";
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
import { liveAppsAccountsPortalSignupSchema } from "src/schema";
import { customizedTheme as theme } from "src/theme";
import { appendSearchString, getSearchQuery, handleError } from "src/utils";
import styled from "styled-components";

const StyledSignupPageWrapper = styled(XYCenter)`
  width: 100%;
  height: calc(100vh - ${layoutSettings.header.height});
`;

const StyledCustomCard = styled(CustomCard)`
  width: 90%;
  max-width: 500px;
  padding: 30px 50px;
  border-radius: 20px;
  background-color: ${theme.colors.themeColors.white};
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

export const SignupPortalContent: React.FC = () => {
  const [submitting, setSubmitting] = useState(false);
  const { search } = useLocation();
  const navigate = useNavigate();
  const searchQuery = getSearchQuery(search);
  const { signup } = useAccountsAuth();
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!searchQuery?.redirectUrl) {
      setError("Redirect Url is required in search query");
    }
  }, [searchQuery]);

  const handleSubmit = async (details) => {
    setSubmitting(true);
    try {
      await signup(details);
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
      name: "",
      email: "",
    },
    onSubmit: handleSubmit,
    validationSchema: liveAppsAccountsPortalSignupSchema,
  });

  const config: CONFIG_TYPE = [
    {
      name: "name",
      // label: "Name",
      placeholder: "Name",
      appearance: "underline",
      style: { margin: "15px auto" },
    },
    {
      name: "email",
      type: "email",
      // label: "Live Apps Email",
      placeholder: "Live Apps Email",
      appearance: "underline",
      style: { margin: "15px auto" },
    },
  ];

  return (
    <StyledSignupPageWrapper>
      <StyledCustomCard
        header={
          <CustomText align="center" as="h3">
            Signup
          </CustomText>
        }
      >
        {error ? (
          <CustomText as="h3">{error}</CustomText>
        ) : (
          <form onSubmit={formik.handleSubmit}>
            <RecursiveContainer
              config={config}
              validationSchema={liveAppsAccountsPortalSignupSchema}
              formik={formik}
            />
            <CustomButton loading={submitting} type="submit">
              Signup with Live Apps
            </CustomButton>
          </form>
        )}
        <CustomButton
          buttonType="link"
          href={`${authConfig.liveAppsLoginPage}?${appendSearchString([
            search,
            { signup: false },
          ])}`}
        >
          Already an user ?
        </CustomButton>
      </StyledCustomCard>
    </StyledSignupPageWrapper>
  );
};
