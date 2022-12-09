import { parseCookies } from "nookies";
import { useTranslation } from "next-i18next";
import { toast, ToastContainer } from "react-toastify";

//hooks
import { useGetProjects } from "hooks";

//components
import {
  Layout,
  Divider,
  CardProject,
  FooterProject,
  HeaderProjects,
  CardsProjectsSkeleton,
  HeaderProjectsSkeleton,
} from "components";

//types
import { ProjectProps } from "types";

//styles
import * as S from "./styles";

export const ProjectsView = () => {
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
        <ToastContainer
          theme={cookies.userTheme === "light" ? "light" : "dark"}
        />

        {loading ? <HeaderProjectsSkeleton /> : <HeaderProjects data={data} />}

        {loading ? (
          <CardsProjectsSkeleton cards={3} />
        ) : (
          dataProjects?.map((project) => (
            <CardProject data={project} key={project?.id} />
          ))
        )}

        <Divider />

        <FooterProject />
      </S.Container>
    </Layout>
  );
};
