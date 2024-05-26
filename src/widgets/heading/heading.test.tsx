import { render, screen } from "@testing-library/react";
import Heading from "./heading";
import userEvent from "@testing-library/user-event";

describe("test heading component", () => {
  it("should has title", () => {
    render(<Heading title="test" onChangeHandler={jest.fn} />);
    const title = screen.getByRole("heading");
    expect(title).toBeInTheDocument();
  });
  it("should has input", async () => {
    render(<Heading title="test" onChangeHandler={jest.fn} />);
    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();
    userEvent.type(input, "text");
    expect(input).toHaveValue("text");
  })
});
