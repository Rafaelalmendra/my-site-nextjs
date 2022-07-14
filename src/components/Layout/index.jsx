//components
import Footer from "../Footer";

//styles
import { Container, Content } from "./styles";

const Layout = ({ children, paddingTop, blogPost }) => {
  return (
    <>
      <Container>
        <Content paddingTop={paddingTop} blogPost={blogPost}>
          {children}
        </Content>
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
