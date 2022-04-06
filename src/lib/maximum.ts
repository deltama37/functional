import { when } from "./chaind-when";

const head = <T extends any>(array: T[]): T => array[0];
const tail = <T extends any>(array: T[]): T[] => array.slice(1);

export const maximum = (x: number[]): number =>
  when(x)
    .on(
      (v) => v.length === 1,
      () => head(x)
    )
    .otherwise(() => Math.max(head(x), maximum(tail(x))));
