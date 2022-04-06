export const sayme = (x: number): string => {
  switch (x) {
    case 1:
      return "one";
    case 2:
      return "two";
    case 3:
      return "three";
    case 4:
      return "four";
    case 5:
      return "five";
    default:
      return "Not between 1 and 5";
  }
};
