import { serverSideTranslations } from "next-i18next/serverSideTranslations";

//components
import { HeadSeo } from "components";

//views
import { HomeView } from "views";

const Home = () => {
  return (
    <>
      <HeadSeo
        title="Home | Rafael Almendra"
        content="Meu nome é Rafael, sou desenvolvedor Front-end apaixonado por tecnologia, programação e Design. Gosto de resolver problemas e ser desafiado."
      />

      <HomeView />
    </>
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
