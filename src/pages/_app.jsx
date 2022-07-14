import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { ApolloProvider } from "@apollo/client";

import Aos from "aos";
import "aos/dist/aos.css";
import "bootstrap-icons/font/bootstrap-icons.css";

//services
import client from "src/services/dato-cms";

//components
import { Navbar } from "src/components/Navbar";
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
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />

        <ScrollButton />

        <Navbar toggleTheme={toggleTheme} />

        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default MyApp;
