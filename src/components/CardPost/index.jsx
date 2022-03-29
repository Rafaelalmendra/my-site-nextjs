import Link from "next/link";
import { Container, Post, ImageEffect } from "./style";

const CardPost = ({ title, thumbnail, author, date }) => {
  return (
    <Container>
      <Link href={`/Blog/`}>
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
