import Image from "next/image";
import * as S from "./styles";

export const Author = ({ authorImage, author, date }) => {
  return (
    <>
      <S.AuthorImage>
        <Image src={authorImage} alt={authorImage} width={80} height={80} />
      </S.AuthorImage>
      <S.AuthorAndDate>
        <span>
          por <strong>{author}</strong>
        </span>
        <span>{date}</span>
      </S.AuthorAndDate>
    </>
  );
};
