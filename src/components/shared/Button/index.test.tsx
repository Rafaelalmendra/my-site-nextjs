import { render, screen } from "@testing-library/react";
import { Button } from ".";

describe("<Button />", () => {
  it("should render a Button with children", () => {
    render(<Button>click here</Button>);

    const button = screen.getByRole("button", { name: /click here/i });

    expect(button).toBeInTheDocument();
  });

  it("should render a disabled Button", () => {
    render(<Button disabled>click here</Button>);

    const button = screen.getByRole("button", { name: /click here/i });

    expect(button).toBeDisabled();
  });

  it("should render a Button with a custom class", () => {
    render(<Button className="custom-class">click here</Button>);

    const button = screen.getByRole("button", { name: /click here/i });

    expect(button).toHaveClass("custom-class");
  });

  it("should render a Button with a custom background color", () => {
    render(<Button backgroundColor="var(--red)">click here</Button>);

    const button = screen.getByRole("button", { name: /click here/i });

    expect(button).toHaveStyle({ backgroundColor: "var(--red)" });
  });

  it("should render a Button with a custom width", () => {
    render(<Button width="100%">click here</Button>);

    const button = screen.getByRole("button", { name: /click here/i });

    expect(button).toHaveStyle({ width: "100%" });
  });

  it("should render a Button with a custom font size", () => {
    render(<Button fontSize="1.5rem">click here</Button>);

    const button = screen.getByRole("button", { name: /click here/i });

    expect(button).toHaveStyle({ fontSize: "1.5rem" });
  });

  it("should render a Button with a custom type", () => {
    render(<Button type="submit">click here</Button>);

    const button = screen.getByRole("button", { name: /click here/i });

    expect(button).toHaveAttribute("type", "submit");
  });

  it("should render a Button with a loading state", () => {
    render(<Button loading>click here</Button>);

    const button = screen.getByRole("button", { name: /click here/i });

    const loadingSpinner = button.querySelector(".loading-spinner");

    expect(loadingSpinner).toBeInTheDocument();
  });
});
