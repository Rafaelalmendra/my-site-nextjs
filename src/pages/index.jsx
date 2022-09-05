import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

//components
import { Layout } from "src/components/Layout";
import { Button } from "src/components/Button";
import { HeadSeo } from "src/components/HeadSeo";

//styles
import * as S from "styles/home";

const Home = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <S.Container>
        <HeadSeo
          title="Home | Rafael Almendra"
          content="Meu nome é Rafael, sou desenvolvedor Front-end apaixonado por tecnologia, programação e Design. Gosto de resolver problemas e ser desafiado. Sempre aberto a novos aprendizados e pronto para enfrentar mudanças."
        />

        <S.TextAbout data-aos="zoom-in">
          <h2>{t("about")}</h2>
          <h3>Rafael de Sousa Almendra</h3>
          <p>{t("myDescription")}</p>

          <S.InfosContainer>
            <S.InfosTextLink>
              <i className="bi bi-building" />
              <a href="https://neogrid.com" target="_blank" rel="noreferrer">
                <span>Neogrid</span>
              </a>
            </S.InfosTextLink>

            <S.InfosText>
              <i className="bi bi-envelope" />
              <span>rafaelalmendra28@gmail.com</span>
            </S.InfosText>

            <S.CurriculumLink>
              <a
                href="https://drive.google.com/file/d/1Pt7ngkyQ-U-3nKnL0y1A2YEYDpXalyxq/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("accessCurriculum")}
              </a>
            </S.CurriculumLink>
          </S.InfosContainer>

          <Link href="/Projects">
            <a>
              <Button>
                {t("projects")} <i className="bi bi-caret-right-fill" />
              </Button>
            </a>
          </Link>
        </S.TextAbout>

        <S.ImageAbout>
          <S.ReactIcon data-aos="zoom-in">
            <Image
              src={"/images/react.svg"}
              alt="Icone do Reactjs"
              width={136}
              height={136}
            />
          </S.ReactIcon>

          <S.ImageProfile>
            <Image
              layout="fill"
              data-aos="zoom-in"
              src={"/images/profile-image.svg"}
              alt="Foto de perfil de Rafael Almendra"
            />
          </S.ImageProfile>
        </S.ImageAbout>
      </S.Container>
    </Layout>
  );
};

export default Home;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
