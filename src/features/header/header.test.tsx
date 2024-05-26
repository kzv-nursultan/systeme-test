import { render, screen } from "@testing-library/react";
import Header from "./header";

describe("test rendering of header component", () => {
  it("should render header", () => {
    render(<Header />);
    const header = screen.getByRole("banner");
    expect(header).toBeInTheDocument();
  })
});
