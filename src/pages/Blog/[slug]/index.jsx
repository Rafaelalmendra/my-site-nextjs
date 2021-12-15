import Image from 'next/image';
import Link from 'next/link';
import getPrismicClient from '../../../services/prismic';
import Prismic from '@prismicio/client'

import { 
  Container,
  ImageContainer,
  Techs,
  AuthorAndDate,
  AuthorImage,
  Return
} from './style';
import LoadingScreen from '../../../components/LoadingScreen';
import { useRouter } from 'next/dist/client/router';

export const getStaticPaths = async () => {
  const prismic = getPrismicClient();
  const posts = await prismic.query([
    Prismic.Predicates.at('document.type', 'post'),
  ]);

  const paths = posts.results.map(post => ({
    params: {
      slug: post.uid
    }
  }));

  return {
    paths,
    fallback: false
  };
};

export const getStaticProps = async context => {
  const prismic = getPrismicClient();
  const { slug } = context.params;

  const response = await prismic.getByUID('post', String(slug), {});

  const posts = {
    slug: response.uid,
    thumbnail: response.data.thumbnail,
    title: response.data.title[0].text,
    technologie1: response.data.technologie1[0].text,
    technologie2: response.data.technologie2[0].text,
    author: response.data.author[0].text,
    author_image: response.data.author_image.url,
    date: response.data.date,
    content: response.data.content,
    link: response.data.link.url
  };

  return {
    props: {
      posts
    },
    revalidate: 86400
  };
};

export default function Slug({ posts }) {
  const router = useRouter();

  if (router.isFallback) {
    return <LoadingScreen />;
  };

  return (
    <Container className="margins-blog">
      <ImageContainer>
        <Image
          className="image"
          src={posts.thumbnail.url}
          alt={posts.thumbnail.alt}
          width={posts.thumbnail.dimensions.width}
          height={posts.thumbnail.dimensions.height}
        />
      </ImageContainer>

      <Techs>
        <span className="tech-blog">{posts.technologie1}</span>
        <span className="tech-blog">{posts.technologie2}</span>
      </Techs>

      <AuthorAndDate className="title-blog">
        <span>por <strong>{posts.author}</strong></span>
        <span>{posts.date}</span>
      </AuthorAndDate>

      <AuthorImage>
        <Image
          className="profile"
          src={posts.author_image}
          alt=""
          width={80}
          height={80}
        />
      </AuthorImage>

      <h1 className="title-blog">{posts.title}</h1>
      <div className="title-blog">
        {posts.content.map((item, index) => (
          <>
            {item.type == "preformatted" ? (
              <h2 style={{marginTop: '2rem'}}>{item.text}</h2>
            ) : (
              <p key={index}>{item.text}</p>
            )}
            
            {item.url ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={item.url} alt=""/>
            ) : (null)}
          </>
        ))}

        {posts.link ? (
          <a href={posts.link} target="_blank" rel="noopener noreferrer">
            Clique aqui para saber mais sobre o {posts.technologie2}
          </a>
        ) : (null)}
      </div>

      <div className="divider-two" style={{marginTop: '2rem'}}></div>

      <Return>
        <Link href="/Blog">
          <a>
            <i className="bi bi-caret-left-fill"></i>
            Voltar para o blog
          </a>
        </Link>
      </Return>
    </Container>
  );
};