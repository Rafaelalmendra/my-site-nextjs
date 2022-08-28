import { useTranslation } from "next-i18next";

//styles
import * as S from "./styles";

export const HeaderProjects = ({ data }) => {
  const { t } = useTranslation();

  return (
    <S.TitleProjects data-aos="fade-down">
      <h2>{t("projects")}</h2>

      <ul>
        {data?.allProjects.map((project) => (
          <li key={project.id}>
            <a href={`#${project.title}`}>{project.title}</a>
          </li>
        ))}
      </ul>
    </S.TitleProjects>
  );
};
