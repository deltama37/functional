import { when } from "./chaind-when";

export const replicate =
  (n: number) =>
  (x: number): number[] =>
    when(n)
      .on(
        (v) => v === 0,
        () => []
      )
      .otherwise(() => [x, ...replicate(n - 1)(x)]);
