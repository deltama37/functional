export const factorial = (x: number): number => {
  return x === 0 ? 1 : x * factorial(x - 1);
};
