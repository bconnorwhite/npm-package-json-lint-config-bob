import { test, expect } from "@jest/globals";
import config from "../source";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const requiredConfig = require("../source");

test("import", () => {
  expect(typeof config.rules).toBe("object");
  expect(Array.isArray(config.rules["prefer-property-order"])).toBe(true);
});

test("require", () => {
  expect(typeof requiredConfig.rules).toBe("object");
  expect(Array.isArray(requiredConfig.rules["prefer-property-order"])).toBe(true);
});
