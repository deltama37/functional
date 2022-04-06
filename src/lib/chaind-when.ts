type ChainedWhen<T, R> = {
  on: <A>(pred: (v: T) => boolean, fn: () => A) => ChainedWhen<T, R | A>;
  otherwise: <A>(fn: () => A) => R | A;
};

export const match = <T, R>(val: any): ChainedWhen<T, R> => ({
  on: <A>(pred: (v: T) => boolean, fn: () => A) => match<T, R | A>(val),
  otherwise: <A>(fn: () => A): A | R => val,
});

export const chain = <T, R>(val: T): ChainedWhen<T, R> => ({
  on: <A>(pred: (v: T) => boolean, fn: () => A) =>
    pred(val) ? match(fn()) : chain<T, A | R>(val),
  otherwise: <A>(fn: () => A) => fn(),
});

export const when = <T>(val: T) => ({
  on: <A>(pred: (v: T) => boolean, fn: () => A) =>
    pred(val) ? match<T, A>(fn()) : chain<T, A>(val),
});

export const head = <T extends any>(array: T[]): T => array[0];
export const tail = <T extends any>(array: T[]): T[] => array.slice(1);
