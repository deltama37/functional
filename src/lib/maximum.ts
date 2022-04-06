import { head, tail, when } from "./chaind-when";

export const maximum = (x: number[]): number =>
  when(x)
    .on(
      (v) => v.length === 1,
      () => head(x)
    )
    .otherwise(() => Math.max(head(x), maximum(tail(x))));
