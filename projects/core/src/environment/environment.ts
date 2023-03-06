import { Environment } from "@common-models";
import { environment as prod } from "./environment.prod";
export const environment: Environment = {
  production: false,
  version: `${prod.version}-dev`,
};
