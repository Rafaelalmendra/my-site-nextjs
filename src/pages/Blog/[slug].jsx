import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { getAllPosts } from "@/services/dato-cms";
//import LoadingScreen from "@/components/LoadingScreen";
import Comments from "@/components/Comments";
import {
  Container,
  ImageContainer,
  Techs,
  AuthorAndDate,
  AuthorImage,
  Return,
} from "styles/slug";

const Slug = ({ post }) => (
  <Container className="margins-blog">
    <Head>
      <title>{post.title}</title>
      <meta name="description" content={post.title} />
    </Head>
    <ImageContainer>
      <Image
        className="image"
        src={post.thumbnail.url}
        alt={post.thumbnail.alt}
        width={1920}
        height={1080}
      />
    </ImageContainer>
    <Techs>
      <span className="tech-blog">{post.technologie1}</span>
      <span className="tech-blog">{post.technologie2}</span>
    </Techs>
    <AuthorImage>
      <Image
        className="profile"
        src={post.authorImage.url}
        alt={post.authorImage.alt}
        width={80}
        height={80}
      />
    </AuthorImage>
    <AuthorAndDate className="title-blog">
      <span>
        por <strong>{post.author}</strong>
      </span>
      <span>{post.date}</span>
    </AuthorAndDate>
    <h1 className="title-blog">{post.title}</h1>
    <div className="title-blog">
      {post.content.map((content) => (
        <>
          {content.subtitle ? <h2>{content.subtitle}</h2> : null}
          {content.text ? <p>{content.text}</p> : null}
          {content.image ? (
            <img src={content.image?.url} alt={content.image?.alt} />
          ) : null}
          {content.link ? <p>{content.link}</p> : null}
          {content.urlLink ? (
            <a
              href={content.urlLink}
              target="_blank"
              rel="noopener noreferrer"
              className="link-blog"
            >
              {content.link}
              {content.urlLink}
            </a>
          ) : null}
        </>
      ))}
    </div>
    <div
      className="divider-two"
      style={{ marginTop: "2rem", marginBottom: "2rem" }}
    ></div>
    <Comments />
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

export const getStaticProps = async ({ params }) => {
  const slug = params?.slug;
  const posts = await getAllPosts();
  const post = posts.find((s) => s.slug === slug) || null;
  if (!post) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      post,
    },
    revalidate: 120,
  };
};

export const getStaticPaths = async () => {
  const posts = await getAllPosts();
  const slugs = posts.map((post) => ({ params: { slug: post.slug } }));
  return {
    paths: slugs,
    fallback: false,
  };
};

export default Slug;
