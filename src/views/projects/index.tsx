import { useTranslation } from "react-i18next";

//components
import { Layout, CardProject } from "components";

//types
import { ProjectProps } from "types";

//styles
import * as S from "./styles";

export const ProjectsView = ({ projects }) => {
  const { t } = useTranslation();

  return (
    <Layout>
      <S.Container>
        <S.TitleProjects>
          <h2>{t("projects")}</h2>

          <ul>
            {projects?.map((project: ProjectProps) => (
              <li key={project?.id}>
                <a href={`#${project?.title}`}>{project?.title}</a>
              </li>
            ))}
          </ul>
        </S.TitleProjects>

        {projects?.map((project: ProjectProps) => (
          <CardProject data={project} key={project?.id} />
        ))}
      </S.Container>
    </Layout>
  );
};
