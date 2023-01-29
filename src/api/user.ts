import { USER_PROFILE } from "src/model";
import { axiosInstance, createApiFunction } from "src/utils";

class UserApi {
  fetchProfile(): Promise<USER_PROFILE> {
    return createApiFunction(() => axiosInstance.get("/user/profile"));
  }
}

export const userApi = new UserApi();
