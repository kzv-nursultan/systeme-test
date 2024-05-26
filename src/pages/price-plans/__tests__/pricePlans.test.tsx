import { render } from "@testing-library/react";
import PricePlans from "../pricePlans";

describe("Price plan page render", () => {
  test("it should match snapshot", () => {
    const view = render(<PricePlans />);
    expect(view).toMatchSnapshot();
  });
});
