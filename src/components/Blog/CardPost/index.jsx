import {
  Post,
  ImageEffect,
  InfosContainer,
  TechCardContainer,
  TechCard,
} from "./styles";

const CardPost = ({ title, thumbnail, author, date, technologies }) => {
  console.log(technologies);

  return (
    <Post>
      <div>
        <ImageEffect style={{ backgroundImage: `url(${thumbnail})` }} />
        <p>{title}</p>
      </div>

      <div>
        <InfosContainer>
          <span>
            por <strong>{author}</strong>
          </span>
          <span>{date}</span>
        </InfosContainer>
        <TechCardContainer>
          {technologies.slice(0, 2).map((tech) => (
            <TechCard>{tech.technologie}</TechCard>
          ))}
        </TechCardContainer>
      </div>
    </Post>
  );
};

export default CardPost;
