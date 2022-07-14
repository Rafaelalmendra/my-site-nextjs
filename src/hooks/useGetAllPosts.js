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

const useGetAllPosts = () => {
  const { data, loading, error } = useQuery(getAllPosts);
  return {
    data,
    loading,
    error,
  };
};

export default useGetAllPosts;
