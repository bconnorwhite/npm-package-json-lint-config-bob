const config = require("../source");

test("sanity check", () => {
  expect(typeof config.rules).toBe("object");
});
