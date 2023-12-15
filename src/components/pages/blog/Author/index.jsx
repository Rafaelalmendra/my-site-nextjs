import { useTranslation } from "next-i18next";
import Image from "next/image";

// styles
import * as S from "./styles";

export const Author = ({ authorImage, author, date }) => {
  const { t } = useTranslation();

  return (
    <>
      {!!authorImage && (
        <S.AuthorImage>
          <Image src={authorImage} alt={authorImage} width={80} height={80} />
        </S.AuthorImage>
      )}

      {!!author && !!date && (
        <S.AuthorAndDate>
          <span>
            {t("by")} <strong>{author}</strong>
          </span>
          <span>{date}</span>
        </S.AuthorAndDate>
      )}
    </>
  );
};
