import { environment as prod } from "./environment.prod";
export const environment = {
  production: false,
  version: `${prod.version}-dev`,
};
