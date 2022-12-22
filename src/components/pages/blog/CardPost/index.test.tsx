import { render, screen } from "@testing-library/react";
import { CardPost } from ".";

describe("CardPost", () => {
  it("should render the title", () => {
    render(
      <CardPost
        author="Rafael"
        date="2021-08-01"
        technologies={[
          {
            technologie: "React",
          },
        ]}
        thumbnail="https://avatars.githubusercontent.com/u/67557314?v=4"
        title="Title"
      />
    );

    expect(screen.getByText("Title")).toBeInTheDocument();
  });

  it("should render the author and date", () => {
    render(
      <CardPost
        author="Rafael"
        date="2021-08-01"
        technologies={[
          {
            technologie: "React",
          },
        ]}
        thumbnail="https://avatars.githubusercontent.com/u/67557314?v=4"
        title="Title"
      />
    );

    expect(screen.getByText("por")).toBeInTheDocument();
    expect(screen.getByText("Rafael")).toBeInTheDocument();
    expect(screen.getByText("2021-08-01")).toBeInTheDocument();
  });

  it("should render the technologies", () => {
    render(
      <CardPost
        author="Rafael"
        date="2021-08-01"
        technologies={[
          {
            technologie: "React",
          },
        ]}
        thumbnail="https://avatars.githubusercontent.com/u/67557314?v=4"
        title="Title"
      />
    );

    expect(screen.getByText("React")).toBeInTheDocument();
  });
});
