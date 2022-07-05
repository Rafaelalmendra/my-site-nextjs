import Link from "next/link";
import { Container, Post, ImageEffect } from "./styles";

const CardPost = ({ title, thumbnail, author, date, slug }) => {
  return (
    <Container>
      <Link href={`/Blog/${slug}`}>
        <a>
          <Post>
            <ImageEffect style={{ backgroundImage: `url(${thumbnail})` }} />
            <p>{title}</p>
            <div>
              <span>
                por <strong>{author}</strong>
              </span>
              <span>{date}</span>
            </div>
          </Post>
        </a>
      </Link>
    </Container>
  );
};

export default CardPost;
