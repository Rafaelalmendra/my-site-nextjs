import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

//hooks
import { useGetFullPost } from "src/hooks/useGetPosts";

//components
import { Layout } from "src/components/Layout";
import { HeadSeo } from "src/components/HeadSeo";
import { Comments } from "src/components/Comments";
import { Author } from "src/components/Blog/Author";
import { DividerTwo } from "src/components/Dividers";
import { LoadingScreen } from "src/components/LoadingScreen";

//styles
import * as S from "styles/post";

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
    <Layout paddingTop blogPost>
      <S.Container>
        <HeadSeo title={post?.title} content={post?.title} />

        <S.ImageContainer>
          <Image
            src={post?.thumbnail?.url}
            alt={post?.thumbnail?.alt}
            width={1920}
            height={1080}
          />
        </S.ImageContainer>

        <S.Techs>
          {post?.technologies?.map((tech, index) => (
            <span key={index} className="tech-blog">
              {tech?.technologie}
            </span>
          ))}
        </S.Techs>

        <Author post={post} />

        <h1>{post?.title}</h1>

        <S.Content dangerouslySetInnerHTML={{ __html: post.content }} />

        <DividerTwo />

        <Comments />

        <S.Return>
          <Link href="/Blog">
            <a>
              <i className="bi bi-caret-left-fill"></i>
              <span>Voltar para o blog</span>
            </a>
          </Link>
        </S.Return>
      </S.Container>
    </Layout>
  );
};

export default Post;
