import { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

//services
import { getRecentProjects, getRecentsPostsBlog } from "services";

//components
import { HeadSeo } from "components";

//types
import { BlogPost, ProjectProps } from "types";

//views
import { HomeView } from "views";

interface HomeProps {
  projects: ProjectProps[];
  postsBlog: BlogPost[];
}

const Home: NextPage<HomeProps> = ({ projects, postsBlog }) => {
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
      projects,
      postsBlog,
    },
    revalidate: 3600,
  };
}
