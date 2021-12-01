import Link from 'next/link';

import getPrismicClient from '../../services/prismic';
import Prismic from '@prismicio/client'

import { Container, Title, Post, ImageEffect, ContainerPost } from './style';

export const getStaticProps = async () => {
  const prismic = getPrismicClient();

  const projectResponse = await prismic.query(
    [Prismic.Predicates.at('document.type', 'post')],
    { orderings: '[document.frist_publication_date desc]' }
  );

  const posts = projectResponse.results.map(post => ({
    slug: post.uid,
    thumbnail: post.data.thumbnail,
    title: post.data.title,
    technologie1: post.data.technologie1,
    technologie2: post.data.technologie2,
    author: post.data.author,
    author_image: post.data.author,
    date: post.data.date,
    description: post.data.description,
    subtitle: post.data.subtitle,
    content: post.data.content
  }))

  return {
    props: {
      posts
    },
    revalidate: 86400
  };
};

export default function Blog({posts}) {
  console.log(posts);

  return (
    <Container>
      <Title>
        <h1>Bem vindo(a) ao meu Blog 👋</h1>
        <input type="search" placeholder="Faça uma pesquisa"/>
      </Title>

      <ContainerPost>
        {posts.map(post => (
          <Link key={post.slug} href="/Blog/Slug">
            <a>
              <Post>
                <ImageEffect style={{ backgroundImage: `url(${post.thumbnail.url})`}}>
                </ImageEffect>
                <p>{post.title[0].text}</p>
                <div>
                  <span>por <strong>{post.author[0].text}</strong></span>
                  <span>{post.date}</span>
                </div>
              </Post>
            </a>
          </Link>
        ))}
      </ContainerPost>
    </Container>
  )
};

