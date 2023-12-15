import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

// components
import { HeadSeo } from "components";

// services
import { getProjects } from "services";

// views
import { ProjectsView } from "views";

const Projects = ({ projects }) => {
  const { t } = useTranslation("common");

  return (
    <>
      <HeadSeo
        title={`${t("projects")} | Rafael Almendra`}
        content="Conheça alguns dos meus projetos"
      />

      <ProjectsView data={projects} />
    </>
  );
};

export default Projects;

export async function getStaticProps({ locale }) {
  const projects = await getProjects();

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      projects: projects || [],
    },
  };
}
