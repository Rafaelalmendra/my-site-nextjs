import { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

//components
import { HeadSeo } from "components";

//types
import { BlogPostData } from "types";

//services
import { getFullPostBlog } from "services";

//views
import { PostView } from "views";

interface PostProps {
  postBlog: BlogPostData;
}

const Post: NextPage<PostProps> = ({ postBlog }) => {
  return (
    <>
      <HeadSeo
        title={`${postBlog?.title} | Rafael Almendra`}
        content={`${postBlog?.title} | Rafael Almendra`}
      />

      <PostView postBlog={postBlog} />
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
  const postBlog = await getFullPostBlog(params?.slug);

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      postBlog,
    },
    revalidate: 60 * 5,
  };
}
