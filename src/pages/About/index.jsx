import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

// views
import { AboutView } from "views";

// components
import { HeadSeo } from "components";

const About = () => {
  const { t } = useTranslation();

  return (
    <>
      <HeadSeo
        title={`${t("aboutMe")} | Rafael Almendra`}
        content="Conheça um pouco sobre mim"
      />

      <AboutView />
    </>
  );
};

export default About;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
