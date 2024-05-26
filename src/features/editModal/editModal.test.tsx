import { render, screen } from "@testing-library/react";
import EditModal from "./editModal";
import userEvent from "@testing-library/user-event";

describe("test edit modal render", () => {
  it("should has edit button", async () => {
    render(<EditModal data={[]} row={{}} setData={jest.fn()} />);
    const button = await screen.findByRole("button", { name: "edit" });
    expect(button).toBeInTheDocument();
  });
  it("should open modal on button click", async () => {
    render(
      <EditModal data={[{ name: "" }]} row={{ name: "" }} setData={jest.fn()} />
    );
    const button = await screen.findByRole("button", { name: "edit" });
    userEvent.click(button);
    const text = await screen.findByText("name");
    expect(text).toBeInTheDocument();
  });
});
