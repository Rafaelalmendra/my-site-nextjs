import { useEffect, useState } from "react";
import Head from "next/head";
import { ApolloProvider } from "@apollo/client";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../styles/theme";
import Aos from "aos";
import "aos/dist/aos.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import ScrollButton from "../components/ScrollButton";
import GlobalStyle from "../styles/global";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import client from "@/services/dato-cms";

const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    Aos.init({ duration: 700, offset: 120 });
  }, []);
  const [theme, setTheme] = useState(darkTheme);
  const toggleTheme = () => {
    setTheme(theme.title === "dark" ? lightTheme : darkTheme);
  };
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
