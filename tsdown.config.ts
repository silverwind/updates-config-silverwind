import {defineConfig} from "tsdown";
import {nodeLib} from "tsdown-config-silverwind";

export default defineConfig(nodeLib({
  url: import.meta.url,
}));
