import { useEffect, useState } from "react";
import { appWithTranslation } from "next-i18next";
import { ThemeProvider } from "styled-components";
import { ApolloProvider } from "@apollo/client";
import { parseCookies, setCookie } from "nookies";
import { SkeletonTheme } from "react-loading-skeleton";
import { ToastContainer } from "react-toastify";
import TagManager from "react-gtm-module";

import Aos from "aos";
import "aos/dist/aos.css";
import "bootstrap-icons/font/bootstrap-icons.css";

//services
import { client } from "services";

//components
import { Navbar, ScrollButton } from "components";

//styles
import { lightTheme, darkTheme } from "styles/theme";
import GlobalStyle from "styles/global";
import "react-toastify/dist/ReactToastify.css";
import "react-loading-skeleton/dist/skeleton.css";

import { NextNProgress } from "components";

const MyApp = ({ Component, pageProps }) => {
  const cookies = parseCookies();
  const [theme, setTheme] = useState(
    cookies.userTheme
      ? cookies.userTheme === "light"
        ? lightTheme
        : darkTheme
      : darkTheme
  );
  useEffect(() => {
    TagManager.initialize({ gtmId: "GTM-M22CJR7" });
  }, []);

  useEffect(() => {
    Aos.init({ duration: 700, offset: 0 });
  }, []);

  const toggleTheme = () => {
    setCookie(null, "userTheme", theme.title === "dark" ? "light" : "dark", {
      maxAge: 30 * 24 * 60 * 60,
      path: "/",
    });

    setTheme(theme.title === "dark" ? lightTheme : darkTheme);
  };

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <ToastContainer />
        <ScrollButton />
        <Navbar toggleTheme={toggleTheme} />
        <NextNProgress options={{ showSpinner: false }} />
        <SkeletonTheme
          baseColor={theme.title === "dark" ? "#353535" : "#e0e0e0"}
          highlightColor={theme.title === "dark" ? "#525252" : "#f7f7f7"}
        >
          <Component {...pageProps} />
        </SkeletonTheme>
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default appWithTranslation(MyApp);
