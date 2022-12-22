import { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "react-i18next";

//components
import { HeadSeo, Layout } from "components";

const About: NextPage = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <HeadSeo
        title={`${t("aboutMe")} | Rafael Almendra`}
        content="Conheça um pouco sobre mim"
      />

      <h1>About</h1>
    </Layout>
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
