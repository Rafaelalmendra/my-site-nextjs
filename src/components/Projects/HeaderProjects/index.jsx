import * as S from "./styles";

export const HeaderProjects = ({ data }) => {
  return (
    <S.TitleProjects data-aos="fade-down">
      <h2>PROJETOS</h2>

      <ul>
        {data?.allProjects.map((project) => (
          <li key={project.id}>
            <a href={`#${project.title}`}>{project.title}</a>
          </li>
        ))}
      </ul>
    </S.TitleProjects>
  );
};
