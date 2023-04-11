import Image from "next/image";
import { useTranslation } from "next-i18next";

// components
import { Tag } from "components";

// types
import { ProjectProps } from "types";

// styles
import * as S from "./styles";

// icons
import { FigmaLogo, GithubLogo, Globe } from "phosphor-react";

export const CardProject = ({
  title,
  image,
  ismyproject,
  technologies,
  description,
  github,
  figma,
  deploy,
}: ProjectProps) => {
  const { t } = useTranslation("common");

  return (
    <S.ProjectContainer id={title}>
      {!!image.url ? (
        <S.ProjectImage>
          <a href={deploy} target="_blank" rel="noopener noreferrer">
            <S.TagContainer>
              <Tag
                text={ismyproject ? t("authorial") : t("client")}
                color={ismyproject ? "var(--blue)" : "var(--yellow)"}
              />
            </S.TagContainer>

            <div className="imageLink">
              <p>
                {t("acessDeploy")} <Globe size={28} />
              </p>
            </div>
            <Image src={image.url} alt={image.alt} layout="fill" />
          </a>
        </S.ProjectImage>
      ) : (
        <S.NoImage>
          <p>{t("noImage")}</p>
        </S.NoImage>
      )}

      {!!title && (
        <S.NameAndDescription>
          <div>
            <h3>{title}</h3>

            {!!technologies && (
              <S.Techs>
                {technologies.map((tech, index) => (
                  <span key={index}>{tech.technologie}</span>
                ))}
              </S.Techs>
            )}
          </div>

          {!!description && (
            <S.Description dangerouslySetInnerHTML={{ __html: description }} />
          )}
        </S.NameAndDescription>
      )}

      <S.Details>
        <S.LinkAndRepository>
          {!!deploy && (
            <a href={deploy} target="_blank" rel="noopener noreferrer">
              <Globe size={28} />
            </a>
          )}

          {!!github && (
            <a href={github} target="_blank" rel="noopener noreferrer">
              <GithubLogo size={28} weight="fill" />
            </a>
          )}

          {!!figma && (
            <a href={figma} target="_blank" rel="noopener noreferrer">
              <FigmaLogo size={28} />
            </a>
          )}
        </S.LinkAndRepository>
      </S.Details>
    </S.ProjectContainer>
  );
};
