import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "next-i18next";

// components
import { Layout, Author, Button, AddComment } from "components";

// styles
import * as S from "./styles";

// icons
import { ArrowLeft } from "phosphor-react";

export const PostView = ({ data }) => {
  const { t } = useTranslation();
  const [commentsOpenModal, setCommentsOpenModal] = useState(false);

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

        <Link href="/Blog">
          <a>
            <Button variant="tertiary" fontSize="1rem">
              <ArrowLeft size={22} /> {t("backToBlog")}
            </Button>
          </a>
        </Link>

        <S.Divider />

        <AddComment
          isOpen={commentsOpenModal}
          handleClose={handleCloseCommentsModal}
        />
      </S.Container>
    </Layout>
  );
};
