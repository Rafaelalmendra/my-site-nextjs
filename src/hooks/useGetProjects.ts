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
      figma
      deploy
      github
      ismyproject
    }
  }
`;

export const useGetProjects = () => {
  const { data, loading, error } = useQuery(getProjects);
  return {
    data,
    loading,
    error,
  };
};
