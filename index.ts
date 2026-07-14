import {deepMerge} from "deepie-merge";
import type {Config} from "updates";

export type CustomConfig = Config & {url: string};

export function base(config: CustomConfig): Config {
  return deepMerge(config, {
    pin: {
      typescript: "^6", // wait on typescript-eslint to support 7
      pnpm: "<11.12.0", // https://github.com/pnpm/pnpm/issues/12955
    },
  }, {arrayExtend: true});
}
