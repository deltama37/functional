import { add } from "./add";

test("function add", () => {
  expect(add(3)(3)).toBe(6);
});
