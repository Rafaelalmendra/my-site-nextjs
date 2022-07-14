import * as S from "./styles";

export const HeaderProjects = ({ data }) => (
  <S.TitleProjects data-aos="fade-down">
    <h2>PROJETOS</h2>

    <ul>
      {data?.allProjects.map((project) => (
        <li>
          <a href={`#${project.title}`}>{project.title}</a>
        </li>
      ))}
    </ul>
  </S.TitleProjects>
);

export default HeaderProjects;
