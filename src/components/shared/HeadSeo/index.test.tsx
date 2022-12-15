import { render, waitFor } from "@testing-library/react";
import { HeadSeo } from ".";

jest.mock("next/head", () => {
  const ReactDOMServer = require("react-dom/server");
  return {
    __esModule: true,
    default: ({
      children,
    }: {
      children: Array<React.ReactElement> | React.ReactElement | null;
    }) => {
      if (children) {
        global.document.head.insertAdjacentHTML(
          "afterbegin",
          ReactDOMServer.renderToString(children) || ""
        );
      }
      return null;
    },
  };
});

describe("<HeadSeo />", () => {
  it("should render a HeadSeo with title", async () => {
    render(<HeadSeo title="Home | Rafael Almendra" />);

    await waitFor(() =>
      expect(document.title).toEqual("Home | Rafael Almendra")
    );
  });

  it("should render a HeadSeo with content", async () => {
    render(
      <HeadSeo
        title="Home | Rafael Almendra"
        content="Rafael Almendra's personal website"
      />
    );

    await waitFor(() =>
      expect(
        document.querySelector('meta[name="description"]')
      ).toHaveAttribute("content", "Rafael Almendra's personal website")
    );
  });
});
