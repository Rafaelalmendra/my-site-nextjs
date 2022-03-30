import Head from "next/head";
import CardPost from "@/components/CardPost";
import { getAllPosts } from "@/services/dato-cms";
import { Container, Title, ContainerCards } from "styles/blog";

const Blog = ({ posts }) => (
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
      {posts.map((post) => (
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

export const getStaticProps = async () => {
  const posts = await getAllPosts();
  return {
    props: {
      posts,
    },
    revalidate: 120,
  };
};

export default Blog;
