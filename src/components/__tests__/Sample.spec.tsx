import { Sample } from "@/components/Sample";
import { render } from "@testing-library/react";

test("should first", () => {
  const { getByText } = render(<Sample />);
  expect(getByText("Nextjs+Jestのサンプルサプリ")).toBeTruthy();
  expect(getByText("設定がすごく楽になりました。")).toBeTruthy();
});

test("adds 1 + 2 to equal 3", () => {
  expect(1 + 2).toBe(3);
});
