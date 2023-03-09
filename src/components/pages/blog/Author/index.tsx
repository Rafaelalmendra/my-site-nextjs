import Image from "next/image";

// styles
import * as S from "./styles";

interface AuthorProps {
  authorImage: string;
  author: string;
  date: string;
}

export const Author = ({ authorImage, author, date }: AuthorProps) => {
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
            por <strong>{author}</strong>
          </span>
          <span>{date}</span>
        </S.AuthorAndDate>
      )}
    </>
  );
};
