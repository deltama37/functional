import { reverse } from "./reverse";

test("function reverse", () => {
  expect(reverse([1, 2, 3])).toStrictEqual([3, 2, 1]);
});
