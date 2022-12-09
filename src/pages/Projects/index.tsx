import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

//components
import { HeadSeo } from "components";

//views
import { ProjectsView } from "views";

const Projects = () => {
  const { t } = useTranslation();

  return (
    <>
      <HeadSeo
        title={`${t("projects")} | Rafael Almendra`}
        content="Conheça alguns dos meus projetos"
      />

      <ProjectsView />
    </>
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
