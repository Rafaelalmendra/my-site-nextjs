import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

//hooks
import useGetFullPost from "@/hooks/useGetFullPost";

//components
import LoadingScreen from "@/components/LoadingScreen";
import { DividerTwo } from "@/components/Dividers";
import Content from "@/components/Blog/Content";
import Author from "@/components/Blog/Author";
import Comments from "@/components/Comments";
import HeadSeo from "@/components/HeadSeo";

//styles
import { Techs, Return, Container, ImageContainer } from "styles/post";

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
      <Author post={post} />
      <h1>{post?.title}</h1>
      <Content post={post} />
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
