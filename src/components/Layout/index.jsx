import { useContext } from "react";
import { ThemeProvider } from "styled-components";

//contexts
import { ThemeContext } from "contexts/themeContext";

//components
import Navbar from "../Navbar";
import Footer from "../Footer";
import ScrollButton from "../ScrollButton";

//styles
import { Container, Content } from "./styles";
import GlobalStyle from "src/styles/global";

const Layout = ({ children, paddingTop, blogPost }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <Navbar toggleTheme={toggleTheme} />

      <ScrollButton />

      <Container>
        <Content paddingTop={paddingTop} blogPost={blogPost}>
          {children}
        </Content>
      </Container>

      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
