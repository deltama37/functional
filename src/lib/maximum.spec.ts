import { maximum } from "./maximum";

test("function sayme", () => {
  expect(maximum([2, 3, 5, 1])).toBe(5);
});
