import { serverSideTranslations } from "next-i18next/serverSideTranslations";

//services
import { getRecentProjects, getRecentsPostsBlog } from "services";

//components
import { HeadSeo } from "components";

//views
import { HomeView } from "views";

const Home = ({ projects, postsBlog }) => {
  return (
    <>
      <HeadSeo
        title="Home | Rafael Almendra"
        content="Meu nome é Rafael, sou engenheiro de software apaixonado por tecnologia, programação e Design. Trabalho na Neogrid e faço bacharelado em sistemas de informação pela UniFacid Wyden. Tenho criatividade para resolver diferentes tipos de problemas."
      />

      <HomeView projects={projects} postsBlog={postsBlog} />
    </>
  );
};

export default Home;

export async function getStaticProps({ locale }) {
  const projects = await getRecentProjects();
  const postsBlog = await getRecentsPostsBlog();

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      projects: projects || [],
      postsBlog: postsBlog || [],
    },
  };
}
