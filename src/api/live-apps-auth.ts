import { platformConfig } from "src/config";
import {
  LIVE_APPS_LOGIN_DETAILS,
  LIVE_APPS_SIGNUP_DETAILS,
  LIVE_APPS_VALIDATE_OTP_DETAILS,
  LIVE_APPS_VALIDATE_OTP_RESPONSE,
} from "src/model";
import { createApiFunction } from "src/utils";
import { gateway } from "./gateway";

class LiveAppsAuthApi {
  signinWithLiveApps(details: LIVE_APPS_LOGIN_DETAILS): Promise<void> {
    return createApiFunction(() =>
      gateway.post("/auth/accounts", {
        ...details,
        platform: platformConfig.accounts,
      })
    );
  }
  signupWithLiveApps(details: LIVE_APPS_SIGNUP_DETAILS): Promise<void> {
    return createApiFunction(() =>
      gateway.post("/accounts/signup", {
        ...details,
        platform: platformConfig.ping,
      })
    );
  }
  validateOTP(
    details: LIVE_APPS_VALIDATE_OTP_DETAILS
  ): Promise<LIVE_APPS_VALIDATE_OTP_RESPONSE> {
    return createApiFunction(() =>
      gateway.post("/auth/accounts/2fa/otp/validate", details)
    );
  }
}

export const liveAppsAuthApi = new LiveAppsAuthApi();
