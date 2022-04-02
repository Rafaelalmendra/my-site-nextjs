import { Divider } from "@/components/Dividers";
import ProjectCard from "@/components/Projects/ProjectCard";
import Header from "@/components/Projects/Header";
import Footer from "@/components/Projects/Footer";
import HeadSeo from "@/components/HeadSeo";
import Container from "styles/projects";

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
