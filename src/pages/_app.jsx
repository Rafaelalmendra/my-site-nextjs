import Head from "next/head";
import { useEffect, useState } from "react";
import { ApolloProvider } from "@apollo/client";
import { ThemeProvider } from "styled-components";

import Aos from "aos";
import "aos/dist/aos.css";
import "bootstrap-icons/font/bootstrap-icons.css";

//services
import client from "src/services/dato-cms";

//components
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ScrollButton from "../components/ScrollButton";

//styles
import GlobalStyle from "../styles/global";
import { lightTheme, darkTheme } from "../styles/theme";

const MyApp = ({ Component, pageProps }) => {
  const [theme, setTheme] = useState(darkTheme);

  const toggleTheme = () => {
    setTheme(theme.title === "dark" ? lightTheme : darkTheme);
  };

  useEffect(() => {
    Aos.init({ duration: 700, offset: 0 });
  }, []);

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Head>
          <title>Rafael Almendra</title>
        </Head>

        <Navbar toggleTheme={toggleTheme} />

        <ScrollButton />

        <GlobalStyle />

        <Component {...pageProps} />

        <Footer />
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default MyApp;
