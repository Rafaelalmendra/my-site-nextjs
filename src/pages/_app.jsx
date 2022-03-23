import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../styles/theme";
import ScrollButton from "../components/ScrollButton";
import GlobalStyle from "../styles/global";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Head from "next/head";
import Aos from "aos";
import "aos/dist/aos.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    Aos.init({ duration: 700, offset: 120 });
  }, []);
  const [theme, setTheme] = useState(darkTheme);
  const toggleTheme = () => {
    setTheme(theme.title === "dark" ? lightTheme : darkTheme);
  };
  return (
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
  );
};

export default MyApp;
