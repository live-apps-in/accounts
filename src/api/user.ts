import { platformConfig } from "src/config";
import { AUTH_DATA } from "src/model";
import { createApiFunction } from "src/utils";
import { gateway } from "./gateway";

class UserApi {
  profile(): Promise<AUTH_DATA> {
    return createApiFunction(() =>
      gateway.get(`/${platformConfig.accounts}/profile`)
    );
  }
}

export const userApi = new UserApi();
