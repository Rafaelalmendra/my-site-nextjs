import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import { gql, useQuery } from "@apollo/client";
import LoadingScreen from "@/components/LoadingScreen";
import Comments from "@/components/Comments";
import {
  Container,
  ImageContainer,
  Techs,
  AuthorAndDate,
  AuthorImage,
  Return,
} from "styles/post";

const getFullPost = gql`
  query singlePost($slug: String!) {
    allPosts(filter: { slug: { eq: $slug } }) {
      id
      slug
      technologies {
        technologie
      }
      thumbnail {
        url
        alt
      }
      author
      authorImage {
        url
        alt
      }
      date
      title
      content {
        ... on ImageRecord {
          id
          _status
          image {
            url
            alt
          }
        }
        ... on SubtitleRecord {
          id
          subtitle
        }
        ... on TextRecord {
          id
          text
        }
        ... on LinkRecord {
          id
          link
        }
        ... on UrlLinkRecord {
          id
          urlLink
        }
      }
    }
  }
`;

const Post = () => {
  const router = useRouter();
  const slug = router.query.slug;
  const { data, loading, error } = useQuery(getFullPost, {
    variables: {
      slug: slug,
    },
  });
  const post = data?.allPosts[0];
  console.log(post);
  if (loading) {
    return <LoadingScreen />;
  }
  if (error) {
    console.error(error);
  }

  return (
    <Container className="margins-blog">
      <Head>
        <title>{post?.title}</title>
        <meta name="description" content={post?.title} />
      </Head>
      <ImageContainer>
        <Image
          className="image"
          src={post?.thumbnail?.url}
          alt={post?.thumbnail?.alt}
          width={1920}
          height={1080}
        />
      </ImageContainer>
      <Techs>
        {post?.technologies?.map((tech) => (
          <span className="tech-blog">{tech?.technologie}</span>
        ))}
      </Techs>
      <AuthorImage>
        <Image
          className="profile"
          src={post?.authorImage?.url}
          alt={post?.authorImage?.alt}
          width={80}
          height={80}
        />
      </AuthorImage>
      <AuthorAndDate className="title-blog">
        <span>
          por <strong>{post?.author}</strong>
        </span>
        <span>{post?.date}</span>
      </AuthorAndDate>
      <h1 className="title-blog">{post?.title}</h1>
      <div className="title-blog">
        {post?.content?.map((content) => (
          <>
            {content?.subtitle ? <h2>{content?.subtitle}</h2> : null}
            {content?.text ? <p>{content?.text}</p> : null}
            {content?.image ? (
              <img src={content?.image?.url} alt={content.image?.alt} />
            ) : null}
            {content?.link ? <p>{content?.link}</p> : null}
            {content?.urlLink ? (
              <a
                href={content?.urlLink}
                target="_blank"
                rel="noopener noreferrer"
                className="link-blog"
              >
                {content?.link}
                {content?.urlLink}
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
};

export default Post;
