export const lucky = (x: number): string => {
  switch (x) {
    case 7:
      return "LUCKY NUMBER SEVEN!";
    default:
      return "Sorry, you're out of luck, pal!";
  }
};
