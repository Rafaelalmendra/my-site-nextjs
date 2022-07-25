import { gql, useQuery } from "@apollo/client";

const getAllPosts = gql`
  query {
    allPosts {
      slug
      thumbnail {
        url
        alt
      }
      technologies {
        technologie
      }
      author
      date
      title
    }
  }
`;

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

const useGetAllPosts = () => {
  const { data, loading, error } = useQuery(getAllPosts);

  return {
    data,
    loading,
    error,
  };
};

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

export { useGetAllPosts, useGetFullPost };
