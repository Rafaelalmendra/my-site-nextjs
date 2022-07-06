import { useEffect } from "react";
import { ApolloProvider } from "@apollo/client";

import Aos from "aos";
import "aos/dist/aos.css";
import "bootstrap-icons/font/bootstrap-icons.css";

//services
import client from "src/services/dato-cms";

//contexts
import { ThemeContextProvider } from "contexts/themeContext";

const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    Aos.init({ duration: 700, offset: 0 });
  }, []);

  return (
    <ApolloProvider client={client}>
      <ThemeContextProvider>
        <Component {...pageProps} />
      </ThemeContextProvider>
    </ApolloProvider>
  );
};

export default MyApp;
