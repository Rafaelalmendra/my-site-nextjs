import { useEffect, useState } from "react";
import Script from "next/script";
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

// animations
import Aos from "aos";
import "aos/dist/aos.css";

// styles
import GlobalStyle from "styles/global";
import "react-toastify/dist/ReactToastify.css";
import "react-loading-skeleton/dist/skeleton.css";
import Head from "next/dist/shared/lib/head";

const MyApp = ({ Component, pageProps }) => {
  const [theme, setTheme] = useState<ThemeProps>(verifyTheme);

  useEffect(() => {
    Aos.init({ duration: 700, offset: 0 });
  }, []);

  const handleTheme = () => {
    changeTheme(theme);
    setTheme(theme.title === "dark" ? lightTheme : darkTheme);
  };

  const gtmId = process.env.GOOGLE_TAG_MANAGER_ID;

  return (
    <>
      <Head>
        <Script
          id="gtm"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer', "${gtmId}");
          `,
          }}
        />
      </Head>

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
    </>
  );
};

export default appWithTranslation(MyApp);
