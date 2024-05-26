import { render, screen } from "@testing-library/react";
import Table from "./table";

describe("check table component", () => {
  it("should rendering correctly", () => {
    render(<Table data={[]} columns={[]} setData={jest.fn} />);
    const table = screen.getByRole("table");
    expect(table).toBeInTheDocument();
  });
});
