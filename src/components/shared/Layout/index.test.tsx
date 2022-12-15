import { render, screen } from "@testing-library/react";
import { Layout } from ".";

describe("<Layout />", () => {
  it("should render a Layout with children", () => {
    render(<Layout>children</Layout>);

    expect(screen.getByText("children")).toBeInTheDocument();
  });

  it("should render a padding top", () => {
    render(<Layout paddingTop>children</Layout>);

    expect(screen.getByText("children")).toHaveStyle({
      paddingTop: "4.65rem",
    });
  });

  it("should render with a width of 768px", () => {
    render(<Layout blogPost>children</Layout>);

    expect(screen.getByText("children")).toHaveStyle({
      width: "768px",
    });
  });
});
