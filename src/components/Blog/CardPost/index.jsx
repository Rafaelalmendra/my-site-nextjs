import { Container, Post, ImageEffect } from "./styles";

const CardPost = ({ title, thumbnail, author, date }) => {
  return (
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
  );
};

export default CardPost;
