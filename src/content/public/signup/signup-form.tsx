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
import { LIVE_APPS_URL_QUERY_DATA } from "src/model";
import { liveAppsAccountsPortalSignupSchema } from "src/schema";
import { mediaQuery } from "src/theme";
import { appendSearchString, getSearchQuery, handleError } from "src/utils";
import styled from "styled-components";

const StyledCustomCard = styled(CustomCard)`
  width: 90%;
  max-width: 500px;
  padding: 30px 20px;
  ${mediaQuery.up("sm")} {
    padding: 30px 50px;
  }
  box-shadow: none;
  form > div {
    width: 100%;
  }
`;

const StyledSignupFormWrapper = styled(XYCenter)`
  width: 100%;
  height: 100%;
`;

export const SignupFormContent: React.FC = () => {
  const [submitting, setSubmitting] = useState(false);
  const { search } = useLocation();
  const navigate = useNavigate();
  const searchQuery = getSearchQuery(
    search
  ) as unknown as LIVE_APPS_URL_QUERY_DATA;
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
      label: "Name",
      style: { margin: "10px 5px" },
    },
    {
      name: "email",
      type: "email",
      label: "Live Apps Email",
      style: { margin: "10px 5px" },
    },
  ];

  return (
    <StyledSignupFormWrapper>
      <StyledCustomCard
        header={<CustomText as="h3">Signup to live apps</CustomText>}
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
            <CustomButton fullWidth loading={submitting} type="submit">
              Signup with Live Apps
            </CustomButton>
          </form>
        )}
        <CustomButton
          buttonType="link"
          fullWidth
          href={`${authConfig.liveAppsLoginPage}?${appendSearchString([
            search,
            { signup: false },
          ])}`}
        >
          Already an user ?
        </CustomButton>
      </StyledCustomCard>
    </StyledSignupFormWrapper>
  );
};
