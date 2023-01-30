import { EXAMPLE_API_RESPONSE } from "src/model";
import { createApiFunction } from "src/utils";
import { gateway } from "./gateway";

class ExampleApi {
  register(data: EXAMPLE_API_RESPONSE) {
    return createApiFunction(() => gateway.post("/example/register", data));
  }
}

export const exampleApi = new ExampleApi();
