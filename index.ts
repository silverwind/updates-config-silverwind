import {deepMerge} from "deepie-merge";
import type {Config} from "updates";

export type CustomConfig = Config & {url: string};

export function base(config: CustomConfig): Config {
  return deepMerge(config, {
    pin: {
      "typescript": "^6", // wait on typescript-eslint to support 7
      "@playwright/test": "<= 1.61.0", // https://github.com/microsoft/playwright/issues/41989
    },
  }, {arrayExtend: true});
}
