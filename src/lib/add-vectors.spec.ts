import { addVectors } from "./add-vectors";

test("function addVectors", () => {
  expect(addVectors(1, 2)(2, 3)).toStrictEqual([3, 5]);
});
