import { render } from "@testing-library/react";
import Products from "../products";

describe("Products page render", () => {
  test("it should match snapshot", () => {
    const view = render(<Products />);
    expect(view).toMatchSnapshot();
  });
});
