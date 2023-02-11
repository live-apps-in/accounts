import OtpInput from "react-otp-input";
import { navigateToUrl, styled } from "src/utils";
import { CustomButton, CustomCard, CustomText, FlexRow } from "src/components";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { appendSearchString, getSearchQuery, handleError } from "src/utils";
import { useAccountsAuth } from "src/hooks";
import { authConfig } from "src/config";
import { layoutSettings } from "src/layouts/public/layout-settings";
import { customizedTheme as theme } from "src/theme";

const StyledOTPPageContainer = styled("div")`
  display: grid;
  width: 100vw;
  height: calc(100vh - ${layoutSettings.header.height});
  place-items: center;
`;

const StyledOTPInput = styled(OtpInput)`
  gap: 10px;
  > input {
    width: 35px !important;
    padding: 5px 7px;
  }
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
    align-items: center;
    justify-content: center;
  }
  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }
`;

const StyledActionsContainer = styled(FlexRow)`
  justify-content: center;
`;

export const OTPPortal = () => {
  const [submitting, setSubmitting] = useState(false);
  const [resending, setResending] = useState(false);
  const { search } = useLocation();
  const searchQuery: any = getSearchQuery(search);
  const { email = "" } = useParams();
  const { validateOTP, login } = useAccountsAuth();
  const [otp, setOtp] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!searchQuery?.redirectUrl) {
      setError("Redirect Url is required in search query");
    }
  }, [searchQuery]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    try {
      const data = await validateOTP({ email, otp });
      const [redirectUrl = "", redirectUrlSearch = ""] =
        searchQuery.redirectUrl?.split("?") || [];
      // include return data with the previously present search query in the redirect url
      const navigateUrl = `${redirectUrl}?${appendSearchString([
        {
          token: data[authConfig.tokenAccessor],
          refreshToken: data[authConfig.refreshTokenAccessor],
          email,
          signup: searchQuery.signup,
        },
        redirectUrlSearch,
      ])}`;
      navigateToUrl(navigateUrl);
    } catch (err) {
      handleError(err);
    }
    setSubmitting(false);
  };

  const isValidOTP = () => otp?.toString().trim().length === 6;

  const handleResend = async () => {
    setResending(true);
    try {
      await login({ email });
      window.flash({ message: "OTP sent successfully" });
    } catch (err) {
      handleError(err);
    }
    setResending(false);
  };

  return (
    <StyledOTPPageContainer>
      <StyledCustomCard
        header={
          error ? (
            <CustomText align="center" as="h3">
              Redirect Url is required in search query
            </CustomText>
          ) : (
            <CustomText align="center" as="h3">
              Enter OTP
            </CustomText>
          )
        }
      >
        {!error && (
          <form onSubmit={handleSubmit}>
            <StyledOTPInput
              shouldAutoFocus
              isInputNum
              value={otp}
              onChange={setOtp}
              numInputs={6}
              separator={<span> </span>}
            />
            <StyledActionsContainer>
              <CustomButton
                loading={submitting}
                type="submit"
                disabled={!isValidOTP()}
              >
                Submit
              </CustomButton>
              <CustomButton loading={resending} onClick={handleResend}>
                Resend
              </CustomButton>
            </StyledActionsContainer>
          </form>
        )}
      </StyledCustomCard>
    </StyledOTPPageContainer>
  );
};
