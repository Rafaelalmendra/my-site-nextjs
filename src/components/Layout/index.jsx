//components
import { Footer } from "../Footer";

//styles
import * as S from "./styles";

export const Layout = ({ children, paddingTop, blogPost }) => {
  return (
    <>
      <S.Container>
        <S.Content paddingTop={paddingTop} blogPost={blogPost}>
          {children}
        </S.Content>
      </S.Container>
      <Footer />
    </>
  );
};
