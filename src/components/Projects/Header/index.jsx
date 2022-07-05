import TitleProjects from "./styles";

const Header = ({ data }) => (
  <TitleProjects data-aos="fade-down" className="margins">
    <h2>PROJETOS</h2>

    <ul>
      {data?.allProjects.map((project) => (
        <li>
          <a href={`#${project.title}`}>{project.title}</a>
        </li>
      ))}
    </ul>
  </TitleProjects>
);

export default Header;
