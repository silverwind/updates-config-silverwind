import {base} from "./index.ts";

test("base", () => {
  const cfg = base({url: import.meta.url});
  expect(cfg).toBeObject();
});
