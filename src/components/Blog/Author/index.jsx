import Image from "next/image";
import * as S from "./styles";

export const Author = ({ post }) => (
  <>
    <S.AuthorImage>
      <Image
        src={post?.authorImage?.url}
        alt={post?.authorImage?.alt}
        width={80}
        height={80}
      />
    </S.AuthorImage>
    <S.AuthorAndDate>
      <span>
        por <strong>{post?.author}</strong>
      </span>
      <span>{post?.date}</span>
    </S.AuthorAndDate>
  </>
);
