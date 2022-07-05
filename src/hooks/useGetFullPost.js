import { gql, useQuery } from "@apollo/client";

const getFullPost = gql`
  query singlePost($slug: String!) {
    allPosts(filter: { slug: { eq: $slug } }) {
      id
      slug
      thumbnail {
        url
        alt
      }
      technologies {
        technologie
      }
      title
      author
      authorImage {
        url
      }
      date
      content
    }
  }
`;

const useGetFullPost = (slug) => {
  const { data, loading, error } = useQuery(getFullPost, {
    variables: {
      slug,
    },
  });
  return {
    data,
    loading,
    error,
  };
};

export default useGetFullPost;
