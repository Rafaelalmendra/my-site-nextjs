import { render, fireEvent } from "@testing-library/react";
import { ScrollButton } from ".";

describe("ScrollButton", () => {
  it("should scroll to top when clicked", () => {
    render(<ScrollButton />);

    fireEvent.click(document.querySelector("button") as Element);

    expect(window.scrollY).toBe(0);
  });
});
