import HeadSeo from "@/components/HeadSeo";
import Footer from "../../components/Projects/Footer";
import ProjectCard from "../../components/Projects/ProjectCard";
import { Container, TitleProjects, Divider } from "../../styles/projects";

const Projects = () => (
  <Container>
    <HeadSeo
      title="Projetos | Rafael Almendra"
      content="Conheça alguns dos meus projetos"
    />
    <TitleProjects className="margins" data-aos="fade-down">
      <h2>Projetos</h2>
      <div>
        <ul>
          <li>
            <a href="#nftclub">NFTCLUB</a>
          </li>
          <li>
            <a href="#letmeask">Letmeask</a>
          </li>
        </ul>
      </div>
    </TitleProjects>
    <div className="margins section" data-aos="zoom-in">
      <ProjectCard />
    </div>
    <Divider />
    <footer className="margins">
      <Footer />
    </footer>
  </Container>
);

export default Projects;
