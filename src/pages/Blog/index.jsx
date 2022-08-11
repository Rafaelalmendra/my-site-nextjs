import Link from "next/link";

//hooks
import { useGetAllPosts } from "src/hooks/useGetPosts";

//components
import { Layout } from "src/components/Layout";
import { HeadSeo } from "src/components/HeadSeo";
import { CardPost } from "src/components/Blog/CardPost";
import { LoadingScreen } from "src/components/LoadingScreen";

//styles
import * as S from "styles/blog";

const Blog = () => {
  const { data, loading, error } = useGetAllPosts();

  if (loading) {
    return <LoadingScreen />;
  }

  if (error) {
    console.error(error);
  }

  return (
    <Layout>
      <S.Container>
        <HeadSeo
          title="Blog | Rafael Almendra"
          content="Conheça meus artigos sobre programação."
        />

        <S.Title>Bem vindo(a) ao meu Blog 👋</S.Title>

        <S.ContainerCards>
          {data?.allPosts.map((post) => (
            <Link key={post.slug} href={`/Blog/${post.slug}`}>
              <a>
                <CardPost
                  title={post.title}
                  thumbnail={post.thumbnail?.url}
                  author={post.author}
                  date={post.date}
                  technologies={post.technologies}
                />
              </a>
            </Link>
          ))}
        </S.ContainerCards>
      </S.Container>
    </Layout>
  );
};

export default Blog;
