import { useTranslation } from "next-i18next";

//styles
import * as S from "./styles";

interface HeaderProjectsProps {
  data: {
    allProjects: {
      id: string;
      title: string;
    }[];
  };
}

export const HeaderProjects = ({ data }: HeaderProjectsProps) => {
  const { t } = useTranslation();

  return (
    <S.TitleProjects>
      <h2>{t("projects")}</h2>

      <ul>
        {data?.allProjects.map((project) => (
          <li key={project?.id}>
            <a href={`#${project?.title}`}>{project?.title}</a>
          </li>
        ))}
      </ul>
    </S.TitleProjects>
  );
};
