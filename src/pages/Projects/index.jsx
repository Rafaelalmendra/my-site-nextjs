import Container from "styles/projects";
import HeadSeo from "@/components/HeadSeo";
import Divider from "@/components/Divider";
import Header from "@/components/Projects/Header";
import Footer from "@/components/Projects/Footer";
import ProjectCard from "@/components/Projects/ProjectCard";

const Projects = () => (
  <Container className="margins">
    <HeadSeo
      title="Projetos | Rafael Almendra"
      content="Conheça alguns dos meus projetos"
    />
    <Header />
    <ProjectCard />
    <Divider />
    <Footer />
  </Container>
);

export default Projects;
