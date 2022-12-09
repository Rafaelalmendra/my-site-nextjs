import { serverSideTranslations } from "next-i18next/serverSideTranslations";

//components
import { HeadSeo } from "components";

//views
import { BlogView } from "views";

const Blog = () => {
  return (
    <>
      <HeadSeo
        title="Blog | Rafael Almendra"
        content="Conheça meus artigos sobre programação."
      />

      <BlogView />
    </>
  );
};

export default Blog;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
