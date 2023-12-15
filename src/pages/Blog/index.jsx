import { serverSideTranslations } from "next-i18next/serverSideTranslations";

// components
import { HeadSeo } from "components";

// services
import { getAllPostsBlog } from "services";

// views
import { BlogView } from "views";

const Blog = ({ postsBlog }) => {
  return (
    <>
      <HeadSeo
        title="Blog | Rafael Almendra"
        content="Conheça meus artigos sobre programação."
      />

      <BlogView postsBlog={postsBlog} />
    </>
  );
};

export default Blog;

export async function getStaticProps({ locale }) {
  const postsBlog = await getAllPostsBlog();

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      postsBlog: postsBlog || [],
    },
  };
}
