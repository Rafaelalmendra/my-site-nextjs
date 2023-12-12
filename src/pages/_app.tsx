// @ts-nocheck
import { useEffect, useState } from "react";
import TagManager from "react-gtm-module";
import { appWithTranslation } from "next-i18next";
import { ToastContainer } from "react-toastify";
import { SkeletonTheme } from "react-loading-skeleton";

// theme
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "styles";

// components
import { Footer, Navbar, ScrollButton, NextNProgress } from "components";

// types
import { ThemeProps } from "types";

// utils
import { changeTheme, verifyTheme } from "utils";

// styles
import GlobalStyle from "styles/global";
import "react-toastify/dist/ReactToastify.css";
import "react-loading-skeleton/dist/skeleton.css";

const GOOGLE_TAG_MANEGER_ID = process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID;

const MyApp = ({ Component, pageProps }) => {
  const [theme, setTheme] = useState<ThemeProps>(verifyTheme);

  useEffect(() => {
    TagManager.initialize({ gtmId: GOOGLE_TAG_MANEGER_ID });
  }, []);

  const handleTheme = () => {
    changeTheme(theme);
    setTheme(theme.title === "dark" ? lightTheme : darkTheme);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle theme={theme} />
      <ToastContainer />
      <ScrollButton />
      <Navbar handleTheme={handleTheme} />
      <NextNProgress options={{ showSpinner: false }} />
      <SkeletonTheme
        baseColor={theme.title === "dark" ? "#353535" : "#e0e0e0"}
        highlightColor={theme.title === "dark" ? "#525252" : "#f7f7f7"}
      >
        <Component {...pageProps} />
      </SkeletonTheme>
      <Footer />
    </ThemeProvider>
  );
};

export default appWithTranslation(MyApp);
