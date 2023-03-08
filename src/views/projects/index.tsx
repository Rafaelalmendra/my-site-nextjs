import { useTranslation } from "react-i18next";

// components
import { Layout, CardProject } from "components";

// ypes
import { ProjectProps } from "types";

// styles
import * as S from "./styles";

interface ProjectsProps {
  data: ProjectProps[];
}

export const ProjectsView = ({ data }: ProjectsProps) => {
  const { t } = useTranslation("common");
  console.log(data);

  return (
    <Layout>
      <S.Container>
        <S.TitleProjects>
          <h1>{t("projects")}</h1>

          <ul>
            {data?.map((project) => (
              <li key={project?.id}>
                <a href={`#${project?.title}`}>{project?.title}</a>
              </li>
            ))}
          </ul>
        </S.TitleProjects>

        {data.map((project) => (
          <CardProject
            key={project?.id}
            id={project?.id}
            image={project?.image}
            title={project?.title}
            description={project?.description}
            shortDescription={project?.shortDescription}
            ismyproject={project?.ismyproject}
            technologies={project?.technologies}
            deploy={project?.deploy}
            figma={project?.figma}
            github={project?.github}
          />
        ))}
      </S.Container>
    </Layout>
  );
};
