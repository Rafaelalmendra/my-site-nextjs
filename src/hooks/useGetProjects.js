import { gql, useQuery } from "@apollo/client";

const getProjects = gql`
  query {
    allProjects {
      id
      image {
        url
        alt
      }
      title
      description
      technologies {
        technologie
      }
      deploy
      github
    }
  }
`;

const useGetProjects = () => {
  const { data, loading, error } = useQuery(getProjects);
  return {
    data,
    loading,
    error,
  };
};

export default useGetProjects;
