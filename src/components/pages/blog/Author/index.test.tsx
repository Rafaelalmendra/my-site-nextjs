import { render, screen } from "@testing-library/react";
import { Author } from ".";

describe("Author", () => {
  it("should render the author and date", () => {
    render(
      <Author
        authorImage="
        https://avatars.githubusercontent.com/u/67557314?v=4"
        author="Rafael"
        date="2021-08-01"
      />
    );

    expect(screen.getByText("by")).toBeInTheDocument();
    expect(screen.getByText("Rafael")).toBeInTheDocument();
    expect(screen.getByText("2021-08-01")).toBeInTheDocument();
  });

  it("should render the author image", () => {
    render(
      <Author
        authorImage="
        https://avatars.githubusercontent.com/u/67557314?v=4"
        author="Rafael"
        date="2021-08-01"
      />
    );

    expect(
      screen.getByRole("img", {
        name: "https://avatars.githubusercontent.com/u/67557314?v=4",
      })
    ).toBeInTheDocument();
  });
});
