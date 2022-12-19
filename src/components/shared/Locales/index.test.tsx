import { render, fireEvent } from "@testing-library/react";
import { Locales } from ".";

jest.mock("next-i18next", () => {
  return {
    __esModule: true,
    useTranslation: () => ({
      i18n: {
        changeLanguage: jest.fn(),
      },
    }),
  };
});

jest.mock("next/router", () => {
  return {
    __esModule: true,
    useRouter: () => ({
      pathname: "/",
      locales: ["pt", "en"],
      locale: "pt",
    }),
  };
});

describe("<Locales />", () => {
  it("should render a Locales with pt flag", () => {
    render(<Locales />);

    expect(
      document.querySelector('img[alt="Bandeira do pt"]')
    ).toBeInTheDocument();
  });

  it("should render a Locales with caret down", () => {
    render(<Locales />);

    expect(document.querySelector("i.bi-caret-down-fill")).toBeInTheDocument();
  });

  it("should render a Locales with caret up", () => {
    render(<Locales />);

    fireEvent.click(document.querySelector("i.bi-caret-down-fill") as Element);
    expect(document.querySelector("i.bi-caret-up-fill")).toBeInTheDocument();
  });
});
