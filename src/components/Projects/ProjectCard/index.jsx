import Image from "next/image";
import { useTranslation } from "next-i18next";

//components
import { Tag } from "src/components/Tag";

//styles
import * as S from "./styles";

//images-and-icons
import FigmaIcon from "../../../assets/icons/figma.svg";

export const ProjectCard = ({ project }) => {
  const { t } = useTranslation();

  return (
    <S.ProjectContainer id={project?.title}>
      {!project?.image?.url ? (
        <S.NoImage>
          <p>{t("noImage")}</p>
        </S.NoImage>
      ) : (
        <S.ProjectImage>
          <a href={project?.deploy} target="_blank" rel="noopener noreferrer">
            <S.TagContainer>
              <Tag
                text={project.ismyproject ? t("authorial") : t("course")}
                color={project.ismyproject ? "var(--blue)" : "var(--yellow)"}
              />
            </S.TagContainer>

            <div className="imageLink">
              <p>
                {t("acessDeploy")} <i className="bi bi-globe" />
              </p>
            </div>
            <Image
              src={project?.image.url}
              alt={project?.image.alt}
              layout="fill"
            />
          </a>
        </S.ProjectImage>
      )}

      {project.title && (
        <S.NameAndDescription>
          <div>
            <h3>{project?.title}</h3>
          </div>
          <S.Description
            dangerouslySetInnerHTML={{ __html: project?.description }}
          />
        </S.NameAndDescription>
      )}

      <S.Details>
        {project?.technologies && (
          <S.Techs>
            {project?.technologies?.map((tech, index) => (
              <span key={index}>{tech.technologie}</span>
            ))}
          </S.Techs>
        )}

        <S.LinkAndRepository>
          {project?.deploy && (
            <a href={project?.deploy} target="_blank" rel="noopener noreferrer">
              <i className="bi bi-globe" />
            </a>
          )}

          {project?.repository && (
            <a href={project?.github} target="_blank" rel="noopener noreferrer">
              <i className="bi bi-github" />
            </a>
          )}

          {project?.figma && (
            <a href={project?.figma} target="_blank" rel="noopener noreferrer">
              <FigmaIcon />
            </a>
          )}
        </S.LinkAndRepository>
      </S.Details>
    </S.ProjectContainer>
  );
};
