import Image from "next/image";
import { useTranslation } from "next-i18next";

// components
import { Layout, Career } from "components";

// mocks
import { technologies, career } from "mocks";

// styles
import * as S from "./styles";

export const AboutView = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <S.Container>
        <S.Header>
          <S.TextContainer>
            <h1>{t("about")}</h1>
            <p>{t("aboutDescription")}</p>

            <p className="my-stacks">{t("myStacks")}</p>

            {technologies.length > 0 && (
              <S.TechList>
                {technologies.map((tech) => (
                  <span>- {tech.name}</span>
                ))}
              </S.TechList>
            )}
          </S.TextContainer>

          <S.ImageContainer>
            <div className="profile">
              <Image
                layout="fill"
                src="/images/profile.svg"
                alt="Imagem de perfil Rafael Almendra"
                placeholder="blur"
                blurDataURL="/images/profile.svg"
              />
            </div>
          </S.ImageContainer>
        </S.Header>

        <S.Divider />
        {/*
        <S.CareerContainer>
          <h2>{t("career")}</h2>

          {career.length > 0 && (
            <S.CareerList>
              {career.map((job) => (
                <Career
                  key={job.id}
                  title={job.title}
                  company={job.company}
                  companyLink={job.companyLink}
                  date={job.date}
                  skills={job.skills}
                />
              ))}
            </S.CareerList>
          )}
        </S.CareerContainer> */}
      </S.Container>
    </Layout>
  );
};
