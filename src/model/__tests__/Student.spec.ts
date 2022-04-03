import { Address } from "../Address";
import { findStudentsBy, Student, studentSelector } from "../Student";

test("curried selector", () => {
  const curry = new Student("Haskell", "Curry", "111-11-1111", "Penn State");
  curry.address = new Address("US");

  const turing = new Student("Alan", "Turing", "222-22-2222", "Princeton");
  turing.address = new Address("England");

  const church = new Student("Alonzo", "Church", "333-33-3333", "Princeton");
  church.address = new Address("US");

  const kleene = new Student("Stephen", "Kleene", "444-44-4444", "Princeton");
  kleene.address = new Address("US");

  expect(
    findStudentsBy(
      [curry, turing, church, kleene],
      studentSelector("US", "Princeton")
    )
  ).toStrictEqual([church, kleene]);
});
