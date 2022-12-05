import { parseCookies } from "nookies";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { toast, ToastContainer } from "react-toastify";

//hooks
import { useGetProjects } from "hooks";

//components
import {
  Layout,
  HeadSeo,
  Divider,
  ProjectCard,
  ProjectFooter,
  HeaderProjects,
  CardsProjectsSkeleton,
  HeaderProjectsSkeleton,
} from "components";

//types
import { ProjectProps } from "types";

//styles
import * as S from "styles/projects";

const Projects = () => {
  const { t } = useTranslation();
  const cookies = parseCookies();
  const { data, loading, error } = useGetProjects();

  const dataProjects: ProjectProps[] = data?.allProjects;

  if (error) {
    toast.error(t("errorFetching"));
  }

  return (
    <Layout paddingTop>
      <S.Container>
        <HeadSeo
          title={`${t("projects")} | Rafael Almendra`}
          content="Conheça alguns dos meus projetos"
        />

        <ToastContainer
          theme={cookies.userTheme === "light" ? "light" : "dark"}
        />

        {loading ? <HeaderProjectsSkeleton /> : <HeaderProjects data={data} />}

        {loading ? (
          <CardsProjectsSkeleton cards={3} />
        ) : (
          dataProjects?.map((project) => (
            <ProjectCard data={project} key={project?.id} />
          ))
        )}

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
