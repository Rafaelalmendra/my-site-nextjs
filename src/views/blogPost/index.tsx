import { useState } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";

// components
import { Layout, Author, Button, AddComment, CommentCard } from "components";

// types
import { BlogPostData } from "types";

// styles
import * as S from "./styles";

interface PostViewProps {
  data: BlogPostData;
}

export const PostView = ({ data }: PostViewProps) => {
  const { t } = useTranslation();
  console.log("data", data);

  const [commentsOpenModal, setCommentsOpenModal] = useState(false);

  const handleOpenCommentsModal = () => {
    setCommentsOpenModal(true);
  };

  const handleCloseCommentsModal = () => {
    setCommentsOpenModal(false);
  };

  return (
    <Layout paddingTop blogPost>
      <S.Container>
        <S.ImageContainer>
          <Image
            src={data.thumbnail.url}
            alt={data.thumbnail.alt}
            width={1920}
            height={1080}
          />
        </S.ImageContainer>

        {data.technologies.length > 0 && (
          <S.Techs>
            {data.technologies.map((tech, index) => (
              <span key={index} className="tech-blog">
                {tech.technologie}
              </span>
            ))}
          </S.Techs>
        )}

        <Author
          author={data.author}
          authorImage={data.authorImage.url}
          date={data.date}
        />

        <h1>{data.title}</h1>

        <S.Content dangerouslySetInnerHTML={{ __html: data.content }} />

        <S.Divider />

        <S.CommentsContainer>
          <S.CommentsHeader>
            <Button onClick={handleOpenCommentsModal}>{t("addComment")}</Button>
            <p>
              {1} {t("comment")}
            </p>
          </S.CommentsHeader>

          <S.CommentsContent>
            <CommentCard />
          </S.CommentsContent>
        </S.CommentsContainer>

        <AddComment
          slug={data.slug}
          isOpen={commentsOpenModal}
          handleClose={handleCloseCommentsModal}
        />
      </S.Container>
    </Layout>
  );
};
