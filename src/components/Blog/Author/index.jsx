import Image from "next/image";
import { AuthorImage, AuthorAndDate } from "./styles";

const Author = ({ post }) => (
  <>
    <AuthorImage>
      <Image
        src={post?.authorImage?.url}
        alt={post?.authorImage?.alt}
        width={80}
        height={80}
      />
    </AuthorImage>
    <AuthorAndDate>
      <span>
        por <strong>{post?.author}</strong>
      </span>
      <span>{post?.date}</span>
    </AuthorAndDate>
  </>
);

export default Author;
