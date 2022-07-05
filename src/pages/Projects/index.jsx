//hooks
import useGetProjects from "src/hooks/useGetProjects";

//components
import HeadSeo from "src/components/HeadSeo";
import { Divider } from "src/components/Dividers";
import Header from "src/components/Projects/Header";
import Footer from "src/components/Projects/Footer";
import LoadingScreen from "src/components/LoadingScreen";
import ProjectCard from "src/components/Projects/ProjectCard";

//styles
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
