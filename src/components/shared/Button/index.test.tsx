import { render, screen } from "@testing-library/react";
import { Button } from ".";

describe("<Button />", () => {
  it("should render a disabled Button", () => {
    render(<Button disabled>click here</Button>);

    expect(screen.getByRole("button", { name: /click here/i })).toHaveStyleRule(
      "not-allowed",
      {
        modifier: ":disabled",
      }
    );
  });
});
