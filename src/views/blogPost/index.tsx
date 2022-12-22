import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";

//components
import { Layout, Comments, Author, DividerTwo, Button } from "components";

//styles
import * as S from "./styles";

//icons
import { ArrowLeft } from "phosphor-react";

export const PostView = ({ postBlog }) => {
  const { t } = useTranslation();

  return (
    <Layout paddingTop blogPost>
      <S.Container>
        <S.ImageContainer>
          <Image
            src={postBlog?.thumbnail?.url}
            alt={postBlog?.thumbnail?.alt}
            width={1920}
            height={1080}
          />
        </S.ImageContainer>

        <S.Techs>
          {postBlog?.technologies?.map((tech, index) => (
            <span key={index} className="tech-blog">
              {tech?.technologie}
            </span>
          ))}
        </S.Techs>

        <Author
          author={postBlog?.author}
          authorImage={postBlog?.authorImage?.url}
          date={postBlog?.date}
        />

        <h1>{postBlog?.title}</h1>

        <S.Content dangerouslySetInnerHTML={{ __html: postBlog?.content }} />

        <DividerTwo />

        <Comments />

        <Link href="/Blog">
          <a>
            <Button variant="secondary" fontSize="1rem">
              <ArrowLeft size={22} /> {t("backToBlog")}
            </Button>
          </a>
        </Link>
      </S.Container>
    </Layout>
  );
};
