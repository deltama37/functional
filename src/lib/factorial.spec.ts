import { factorial } from "./factorial";

test("function factorial", () => {
  expect(factorial(0)).toBe(1);
});

test("function factorial", () => {
  expect(factorial(1)).toBe(1);
});

test("function factorial", () => {
  expect(factorial(2)).toBe(2);
});

test("function factorial", () => {
  expect(factorial(3)).toBe(6);
});
