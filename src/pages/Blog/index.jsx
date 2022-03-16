import Link from 'next/link';
import Head from 'next/head';
import server from '../../services/prismic';
import Prismic from '@prismicio/client';

import {
  Container,
  Title,
  Post,
  ImageEffect,
  ContainerPost
} from '../../styles/blog';

export const getStaticProps = async () => {
  const prismic = server();
  const projectResponse = await prismic.query(
    [ Prismic.Predicates.at('document.type', 'post') ],
    { orderings: '[document.frist_publication_date desc]' }
  );
  const posts = projectResponse.results.map(post => ({
    slug: post.uid,
    thumbnail: post.data.thumbnail.url,
    title: post.data.title[0].text,
    author: post.data.author[0].text,
    date: post.data.date,
  }));
  return {
    props: {
      posts
    },
    revalidate: 86400,
  };
};

export default function Blog({posts}) {
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

      <Title>
        <h1>Bem vindo(a) ao meu Blog 👋</h1>
        {/*<input type="search" placeholder="Faça uma pesquisa"/>*/}
      </Title>

      <ContainerPost>
        {posts.map(post => (
          <>
            <Link key={post.slug} href={`/Blog/${post.slug}`}>
              <a>
                <Post>
                  <ImageEffect style={{ backgroundImage: `url(${post.thumbnail})`}}>
                  </ImageEffect>
                  <p>{post.title}</p>
                  <div>
                    <span>por <strong>{post.author}</strong></span>
                    <span>{post.date}</span>
                  </div>
                </Post>
              </a>
            </Link>
          </>
        ))}
      </ContainerPost>
    </Container>
  );
};