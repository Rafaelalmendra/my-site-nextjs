import LoadingScreen from "@/components/LoadingScreen";
import useGetProjects from "@/hooks/useGetProjects";
import { Divider } from "@/components/Dividers";
import ProjectCard from "@/components/Projects/ProjectCard";
import Header from "@/components/Projects/Header";
import Footer from "@/components/Projects/Footer";
import HeadSeo from "@/components/HeadSeo";
import Container from "styles/projects";

const Projects = () => {
  const { data, loading, error } = useGetProjects();
  if (loading) {
    return <LoadingScreen />;
  }
  if (error) {
    console.error(error);
  }

  return (
    <Container className="margins">
      <HeadSeo
        title="Projetos | Rafael Almendra"
        content="Conheça alguns dos meus projetos"
      />
      <Header data={data} />
      <ProjectCard data={data} />
      <Divider />
      <Footer />
    </Container>
  );
};

export default Projects;
