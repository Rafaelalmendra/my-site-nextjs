import Image from "next/image";
import { useTranslation } from "next-i18next";

//components
import { Tag } from "components";

//styles
import * as S from "./styles";

export const ProjectCard = ({ data }) => {
  const { t } = useTranslation();

  return (
    <S.ProjectContainer id={data?.title}>
      {!data?.image?.url ? (
        <S.NoImage>
          <p>{t("noImage")}</p>
        </S.NoImage>
      ) : (
        <S.ProjectImage>
          <a href={data?.deploy} target="_blank" rel="noopener noreferrer">
            <S.TagContainer>
              <Tag
                text={data.ismyproject ? t("authorial") : t("course")}
                color={data.ismyproject ? "var(--blue)" : "var(--yellow)"}
              />
            </S.TagContainer>

            <div className="imageLink">
              <p>
                {t("acessDeploy")} <i className="bi bi-globe" />
              </p>
            </div>
            <Image
              src={data?.image?.url}
              alt={data?.image?.alt}
              layout="fill"
            />
          </a>
        </S.ProjectImage>
      )}

      {data?.title && (
        <S.NameAndDescription>
          <div>
            <h3>{data?.title}</h3>
          </div>
          <S.Description
            dangerouslySetInnerHTML={{ __html: data?.description }}
          />
        </S.NameAndDescription>
      )}

      <S.Details>
        {data?.technologies && (
          <S.Techs>
            {data?.technologies?.map((tech, index) => (
              <span key={index}>{tech?.technologie}</span>
            ))}
          </S.Techs>
        )}

        <S.LinkAndRepository>
          {data?.deploy && (
            <a href={data?.deploy} target="_blank" rel="noopener noreferrer">
              <i className="bi bi-globe" />
            </a>
          )}

          {data?.github && (
            <a href={data?.github} target="_blank" rel="noopener noreferrer">
              <i className="bi bi-github" />
            </a>
          )}

          {data?.figma && (
            <a href={data?.figma} target="_blank" rel="noopener noreferrer">
              <img src="/images/icons/figma.svg" alt="" />
            </a>
          )}
        </S.LinkAndRepository>
      </S.Details>
    </S.ProjectContainer>
  );
};
