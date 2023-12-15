import { serverSideTranslations } from "next-i18next/serverSideTranslations";

// components
import { HeadSeo } from "components";

// services
import { getAllPostsBlog, getFullPostBlog } from "services";

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
  const postsBlog = await getAllPostsBlog();

  const slugs = postsBlog.map((post) => ({
    params: {
      slug: post.slug,
    },
  }));

  return {
    paths: slugs || [],
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
  };
}
