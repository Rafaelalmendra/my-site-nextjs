import { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

// components
import { HeadSeo } from "components";

// services
import { getAllPostsBlog } from "services";

// types
import { BlogPost } from "types";

// views
import { BlogView } from "views";

interface BlogProps {
  postsBlog: BlogPost[];
}

const Blog: NextPage<BlogProps> = ({ postsBlog }) => {
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
      postsBlog,
    },
    revalidate: 3600,
  };
}
