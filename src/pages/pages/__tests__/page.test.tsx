import { render } from "@testing-library/react";
import Pages from "../pages";

describe("Pages page render", () => {
  test("it should match snapshot", () => {
    const view = render(<Pages />);
    expect(view).toMatchSnapshot();
  });
});
