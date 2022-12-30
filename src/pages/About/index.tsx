import { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "react-i18next";

//views
import { AboutView } from "views";

//components
import { HeadSeo } from "components";

const About: NextPage = () => {
  const { t } = useTranslation("common");

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
