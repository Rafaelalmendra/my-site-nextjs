import Image from "next/image";
import { useTranslation } from "next-i18next";

//components
import { Tag } from "components";

//styles
import * as S from "./styles";

//icons
import { FigmaLogo, GithubLogo, Globe } from "phosphor-react";

export const CardProject = ({ data }) => {
  const { t } = useTranslation("common");

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
                text={data.ismyproject ? t("authorial") : t("client")}
                color={data.ismyproject ? "var(--blue)" : "var(--yellow)"}
              />
            </S.TagContainer>

            <div className="imageLink">
              <p>
                {t("acessDeploy")} <Globe size={28} />
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
            {data?.technologies && (
              <S.Techs>
                {data?.technologies?.map((tech, index) => (
                  <span key={index}>{tech?.technologie}</span>
                ))}
              </S.Techs>
            )}
          </div>
          <S.Description
            dangerouslySetInnerHTML={{ __html: data?.description }}
          />
        </S.NameAndDescription>
      )}

      <S.Details>
        <S.LinkAndRepository>
          {data?.deploy && (
            <a href={data?.deploy} target="_blank" rel="noopener noreferrer">
              <Globe size={28} />
            </a>
          )}

          {data?.github && (
            <a href={data?.github} target="_blank" rel="noopener noreferrer">
              <GithubLogo size={28} weight="fill" />
            </a>
          )}

          {data?.figma && (
            <a href={data?.figma} target="_blank" rel="noopener noreferrer">
              <FigmaLogo size={28} />
            </a>
          )}
        </S.LinkAndRepository>
      </S.Details>
    </S.ProjectContainer>
  );
};
