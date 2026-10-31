import type {Config} from "updates";

export type {Config};
export type CustomConfig = Config & {url: string};

export function base(config: CustomConfig): Config {
  return config;
}
