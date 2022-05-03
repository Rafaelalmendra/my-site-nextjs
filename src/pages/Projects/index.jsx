//hooks
import useGetProjects from "@/hooks/useGetProjects";

//components
import ProjectCard from "@/components/Projects/ProjectCard";
import LoadingScreen from "@/components/LoadingScreen";
import Header from "@/components/Projects/Header";
import Footer from "@/components/Projects/Footer";
import { Divider } from "@/components/Dividers";
import HeadSeo from "@/components/HeadSeo";

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
