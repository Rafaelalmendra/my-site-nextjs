// components
import { Layout, Card } from "components";

// styles
import * as S from "./styles";

export const BlogView = ({ postsBlog }) => {
  return (
    <Layout>
      <S.Container>
        <h1>Blog</h1>

        <S.ContainerCards>
          {postsBlog.map((post) => (
            <Card
              blog
              date={post.date}
              title={post.title}
              author={post.author}
              image={post.thumbnail.url}
              technologies={post.technologies}
              link={post.slug}
            />
          ))}
        </S.ContainerCards>
      </S.Container>
    </Layout>
  );
};
