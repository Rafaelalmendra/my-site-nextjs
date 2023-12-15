import { serverSideTranslations } from "next-i18next/serverSideTranslations";

// components
import { HeadSeo } from "components";

// services
import { getFullPostBlog } from "services";

// views
import { PostView } from "views";

const Post = ({ postBlog }) => {
  return (
    <>
      <HeadSeo
        title={`${postBlog.title} | Rafael Almendra`}
        content={`${postBlog.title} | Rafael Almendra`}
      />

      <PostView data={postBlog} />
    </>
  );
};

export default Post;

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}

export async function getStaticProps({ params, locale }) {
  const postBlog = await getFullPostBlog(params.slug);

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      postBlog,
    },
    revalidate: 3600,
  };
}
