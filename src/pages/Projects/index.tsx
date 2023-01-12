import { NextPage } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

//components
import { HeadSeo } from "components";

//services
import { getProjects } from "services";

//types
import { ProjectProps } from "types";

//views
import { ProjectsView } from "views";

interface ProjectsProps {
  projects: ProjectProps[];
}

const Projects: NextPage<ProjectsProps> = ({ projects }) => {
  const { t } = useTranslation("common");

  return (
    <>
      <HeadSeo
        title={`${t("projects")} | Rafael Almendra`}
        content="Conheça alguns dos meus projetos"
      />

      <ProjectsView projects={projects} />
    </>
  );
};

export default Projects;

export async function getStaticProps({ locale }) {
  const projects = await getProjects();

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      projects,
    },
    revalidate: 300000,
  };
}
