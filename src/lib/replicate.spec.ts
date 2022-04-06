import { replicate } from "./replicate";

test("function replicate", () => {
  expect(replicate(3)(5)).toStrictEqual([5, 5, 5]);
});
