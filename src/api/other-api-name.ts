import { EXAMPLE_API_RESPONSE } from "src/model";
import { axiosInstance, createApiFunction } from "src/utils";

class ExampleApi {
  register(data: EXAMPLE_API_RESPONSE) {
    return createApiFunction(() =>
      axiosInstance.post("/example/register", data)
    );
  }
}

export const exampleApi = new ExampleApi();
