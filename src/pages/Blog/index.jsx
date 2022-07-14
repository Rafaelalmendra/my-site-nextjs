import Link from "next/link";

//hooks
import useGetAllPosts from "src/hooks/useGetAllPosts";

//components
import Layout from "src/components/Layout";
import HeadSeo from "src/components/HeadSeo";
import CardPost from "src/components/Blog/CardPost";
import LoadingScreen from "src/components/LoadingScreen";

//styles
import { Title, Container, ContainerCards } from "styles/blog";

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
      <Container>
        <HeadSeo
          title="Blog | Rafael Almendra"
          content="Conheça meus artigos sobre programação."
        />

        <Title>Bem vindo(a) ao meu Blog 👋</Title>

        <ContainerCards>
          {data?.allPosts.map((post) => (
            <Link href={`/Blog/${post.slug}`}>
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
        </ContainerCards>
      </Container>
    </Layout>
  );
};

export default Blog;
