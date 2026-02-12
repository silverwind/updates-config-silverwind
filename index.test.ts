import config from "./index.ts";

test("config", () => {
  const cfg = config({url: import.meta.url});
  expect(cfg).toBeObject();
});
