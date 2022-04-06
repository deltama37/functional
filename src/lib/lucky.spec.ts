import { lucky } from "./lucky";

test("function lucky 7", () => {
  expect(lucky(7)).toBe("LUCKY NUMBER SEVEN!");
});

test("function unlucky", () => {
  expect(lucky(1)).toBe("Sorry, you're out of luck, pal!");
});
