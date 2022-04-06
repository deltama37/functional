import { head, tail, when } from "./chaind-when";

export const reverse = (n: number[]): number[] =>
  when(n)
    .on(
      (v) => !v.length,
      () => []
    )
    .otherwise(() => [...reverse(tail(n)), head(n)]);
