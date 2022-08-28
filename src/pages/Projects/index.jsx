import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

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
  const { t } = useTranslation();
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
          title={`${t("projects")} | Rafael Almendra`}
          content="Conheça alguns dos meus projetos"
        />

        <HeaderProjects data={data} />

        {data?.allProjects.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}

        <Divider />

        <ProjectFooter />
      </S.Container>
    </Layout>
  );
};

export default Projects;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
