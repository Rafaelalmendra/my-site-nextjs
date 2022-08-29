import { useEffect, useState } from "react";
import Script from "next/script";
import { appWithTranslation } from "next-i18next";
import { ThemeProvider } from "styled-components";
import { ApolloProvider } from "@apollo/client";

import Aos from "aos";
import "aos/dist/aos.css";
import "bootstrap-icons/font/bootstrap-icons.css";

//services
import { client } from "src/services/dato-cms";

//components
import { Navbar } from "src/components/Navbar";
import { Analytics } from "src/components/Analytics";
import { ScrollButton } from "src/components/ScrollButton";

//styles
import GlobalStyle from "src/styles/global";
import { lightTheme, darkTheme } from "src/styles/theme";

const MyApp = ({ Component, pageProps }) => {
  const [theme, setTheme] = useState(darkTheme);

  useEffect(() => {
    Aos.init({ duration: 700, offset: 0 });
  }, []);

  const toggleTheme = () => {
    setTheme(theme.title === "dark" ? lightTheme : darkTheme);
  };

  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script id="tag" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', ${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}, {
            page_path: window.location.pathname,
          });
        `}
      </Script>

      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />

          <ScrollButton />

          <Navbar toggleTheme={toggleTheme} />

          <Analytics />

          <Component {...pageProps} />
        </ThemeProvider>
      </ApolloProvider>
    </>
  );
};

export default appWithTranslation(MyApp);
