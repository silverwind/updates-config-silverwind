import {base} from "./index.ts";

test("base", () => {
  expect(base({url: import.meta.url})).toBeObject();
});
