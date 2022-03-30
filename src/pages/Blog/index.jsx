import Head from "next/head";
import { gql, useQuery } from "@apollo/client";
import CardPost from "@/components/CardPost";
import { Container, Title, ContainerCards } from "styles/blog";
import LoadingScreen from "@/components/LoadingScreen";

const GET_POSTS = gql`
  query {
    allPosts {
      id
      slug
      thumbnail {
        url
        alt
      }
      author
      date
      title
    }
  }
`;

const Blog = () => {
  const { data, loading, error } = useQuery(GET_POSTS);
  if (loading) {
    return <LoadingScreen />;
  }
  if (error) {
    console.log(error);
  }
  return (
    <Container className="margins-nav">
      <Head>
        <title>Blog | Rafael Almendra</title>
        <meta
          name="description"
          content="Conheça meus artigos sobre programação."
        />
      </Head>
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
