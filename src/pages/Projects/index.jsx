//hooks
import { useGetProjects } from "src/hooks/useGetProjects";

//components
import { Layout } from "src/components/Layout";
import { HeadSeo } from "src/components/HeadSeo";
import { Divider } from "src/components/Dividers";
import { LoadingScreen } from "src/components/LoadingScreen";
import { ProjectCard } from "src/components/Projects/ProjectCard";
import { ProjectFooter } from "src/components/Projects/ProjectFooter";
import { HeaderProjects } from "src/components/Projects/HeaderProjects";

//styles
import * as S from "styles/projects";

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
      <S.Container>
        <HeadSeo
          title="Projetos | Rafael Almendra"
          content="Conheça alguns dos meus projetos"
        />

        <HeaderProjects data={data} />

        <ProjectCard data={data} />

        <Divider />

        <ProjectFooter />
      </S.Container>
    </Layout>
  );
};

export default Projects;
