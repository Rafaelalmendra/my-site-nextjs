//hooks
import useGetAllPosts from "src/hooks/useGetAllPosts";

//components
import HeadSeo from "src/components/HeadSeo";
import CardPost from "src/components/CardPost";
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
    <Container className="margins">
      <HeadSeo
        title="Blog | Rafael Almendra"
        content="Conheça meus artigos sobre programação."
      />

      <Title>Bem vindo(a) ao meu Blog 👋</Title>

      <ContainerCards>
        {data?.allPosts.map((post) => (
          <CardPost
            title={post.title}
            thumbnail={post.thumbnail?.url}
            author={post.author}
            date={post.date}
            slug={post.slug}
          />
        ))}
      </ContainerCards>
    </Container>
  );
};

export default Blog;
