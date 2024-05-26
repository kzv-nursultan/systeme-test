import { render, screen } from "@testing-library/react";
import Header from "./header";
import { BrowserRouter } from "react-router-dom";

describe("test rendering of header component", () => {
  it("should render header", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    const header = screen.getByRole("banner");
    expect(header).toBeInTheDocument();
  });
});
