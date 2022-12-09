import { useRouter } from "next/router";

//hooks
import { useGetFullPost } from "hooks/useGetPosts";

//components
import { HeadSeo } from "components";

//views
import { PostView } from "views";

//types
import { BlogPostData } from "types";

const Post = () => {
  const router = useRouter();
  const slug = router?.query?.slug;

  const { data } = useGetFullPost(slug);

  const post: BlogPostData = data?.allPosts[0];

  return (
    <>
      <HeadSeo title={post?.title} content={post?.title} />

      <PostView />
    </>
  );
};

export default Post;
