//styles
import * as S from "./styles";

interface LayoutProps {
  children: React.ReactNode;
  paddingTop?: boolean;
  blogPost?: boolean;
}

export const Layout = ({ children, paddingTop, blogPost }: LayoutProps) => {
  return (
    <S.Container>
      <S.Content paddingTop={paddingTop} blogPost={blogPost}>
        {children}
      </S.Content>
    </S.Container>
  );
};
