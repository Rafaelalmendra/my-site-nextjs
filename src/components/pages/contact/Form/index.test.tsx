import { render, screen } from "@testing-library/react";
import { Form } from ".";

describe("Form", () => {
  it("should render the title", () => {
    render(<Form />);

    expect(screen.getByText("Contato")).toBeInTheDocument();
  });
});
