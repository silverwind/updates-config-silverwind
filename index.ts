import {deepMerge} from "deepie-merge";
import type {Config} from "updates";


export type CustomConfig = Config & {url: string};

export default function base (config: CustomConfig): Config {
  return deepMerge(config, {
    pin: {
      "eslint": "^9.0.0",
    }
  });
}
