import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

//hooks
import useGetFullPost from "src/hooks/useGetFullPost";

//components
import HeadSeo from "src/components/HeadSeo";
import Comments from "src/components/Comments";
import Author from "src/components/Blog/Author";
import { DividerTwo } from "src/components/Dividers";
import LoadingScreen from "src/components/LoadingScreen";

//styles
import { Techs, Return, Container, ImageContainer, Content } from "styles/post";

const Post = () => {
  const router = useRouter();
  const slug = router.query.slug;

  const { data, loading, error } = useGetFullPost(slug);
  const post = data?.allPosts[0];

  if (loading) {
    return <LoadingScreen />;
  }

  if (error) {
    console.error(error);
  }

  return (
    <Container>
      <HeadSeo title={post?.title} content={post?.title} />

      <ImageContainer>
        <Image
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

      <Author post={post} />

      <h1>{post?.title}</h1>

      <Content dangerouslySetInnerHTML={{ __html: post.content }} />

      <DividerTwo />

      <Comments />

      <Return>
        <Link href="/Blog">
          <a>
            <i className="bi bi-caret-left-fill"></i>
            <span>Voltar para o blog</span>
          </a>
        </Link>
      </Return>
    </Container>
  );
};

export default Post;
