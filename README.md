# updates-config-silverwind
[![](https://img.shields.io/npm/v/updates-config-silverwind.svg)](https://www.npmjs.org/package/updates-config-silverwind) [![](https://packagephobia.com/badge?p=updates-config-silverwind)](https://packagephobia.com/result?p=updates-config-silverwind)

> Shared updates configuration

## Usage

```sh
pnpm add -D updates-config-silverwind
```

In `updates.config.ts`:

```ts
import {base} from "updates-config-silverwind";

export default base({url: import.meta.url});
```

© [silverwind](https://github.com/silverwind), distributed under BSD licence
