import { serverSideTranslations } from "next-i18next/serverSideTranslations";

//components
import { HeadSeo } from "components";

//services
import { getProjects, getAllPostsBlog } from "services";

//views
import { HomeView } from "views";

const Home = ({ projects, postsBlog }) => {
  return (
    <>
      <HeadSeo
        title="Home | Rafael Almendra"
        content="Meu nome é Rafael, sou desenvolvedor Front-end apaixonado por tecnologia, programação e Design. Gosto de resolver problemas e ser desafiado."
      />

      <HomeView projects={projects} postsBlog={postsBlog} />
    </>
  );
};

export default Home;

export async function getStaticProps({ locale }) {
  const projects = await getProjects();
  const postsBlog = await getAllPostsBlog();

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      projects,
      postsBlog,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  };
}
