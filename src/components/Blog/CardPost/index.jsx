import * as S from "./styles";

export const CardPost = ({ title, thumbnail, author, date, technologies }) => {
  return (
    <S.Post>
      <div>
        <S.ImageEffect style={{ backgroundImage: `url(${thumbnail})` }} />
        <p>{title}</p>
      </div>

      <div>
        <S.InfosContainer>
          <span>
            por <strong>{author}</strong>
          </span>
          <span>{date}</span>
        </S.InfosContainer>
        <S.TechCardContainer>
          {technologies.slice(0, 2).map((tech, index) => (
            <S.TechCard key={index}>{tech.technologie}</S.TechCard>
          ))}
        </S.TechCardContainer>
      </div>
    </S.Post>
  );
};
