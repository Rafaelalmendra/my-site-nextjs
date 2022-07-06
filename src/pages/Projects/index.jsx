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
import Layout from "src/components/Layout";
import { Container } from "styles/projects";

const Projects = () => {
  const { data, loading, error } = useGetProjects();

  if (loading) {
    return <LoadingScreen />;
  }

  if (error) {
    console.error(error);
  }

  return (
    <Layout paddingTop>
      <Container>
        <HeadSeo
          title="Projetos | Rafael Almendra"
          content="Conheça alguns dos meus projetos"
        />

        <Header data={data} />

        <ProjectCard data={data} />

        <Divider />

        <Footer />
      </Container>
    </Layout>
  );
};

export default Projects;
