import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

//hooks
import { useGetFullPost } from "hooks/useGetPosts";

//components
import {
  Layout,
  Comments,
  Author,
  DividerTwo,
  LoadingScreen,
} from "components";

//types
import { BlogPostData } from "types";

//styles
import * as S from "./styles";

export const PostView = () => {
  const router = useRouter();
  const slug = router?.query?.slug;

  const { data, loading, error } = useGetFullPost(slug);

  const post: BlogPostData = data?.allPosts[0];

  if (loading) {
    return <LoadingScreen />;
  }

  if (error) {
    console.error(error);
  }

  return (
    <Layout paddingTop blogPost>
      <S.Container>
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

        <Author
          author={post?.author}
          authorImage={post?.authorImage?.url}
          date={post?.date}
        />

        <h1>{post?.title}</h1>

        <S.Content dangerouslySetInnerHTML={{ __html: post?.content }} />

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
