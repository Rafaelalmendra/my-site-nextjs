import Head from "next/head";
import CardPost from "@/components/CardPost";
import { getAllPosts } from "@/services/dato-cms";
import { Container, Title } from "styles/blog";

const Blog = ({ posts }) => {
  console.log(posts);
  return (
    <Container className="margins-nav">
      <Head>
        <title>Blog | Rafael Almendra</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Conheça o meu blog e meus artigos sobre programação."
        />
      </Head>
      <Title>Bem vindo(a) ao meu Blog 👋</Title>
      {posts.map((post) => (
        <CardPost
          title={post.title}
          thumbnail={post.thumbnail?.url}
          author={post.author}
          date={post.date}
          slug={post.slug}
        />
      ))}
    </Container>
  );
};

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
