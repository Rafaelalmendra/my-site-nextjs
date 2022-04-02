import { gql, useQuery } from "@apollo/client";

const getFullPost = gql`
  query singlePost($slug: String!) {
    allPosts(filter: { slug: { eq: $slug } }) {
      id
      slug
      technologies {
        technologie
      }
      thumbnail {
        url
        alt
      }
      author
      authorImage {
        url
        alt
      }
      date
      title
      content {
        ... on ImageRecord {
          id
          _status
          image {
            url
            alt
          }
        }
        ... on SubtitleRecord {
          id
          subtitle
        }
        ... on TextRecord {
          id
          text
        }
        ... on LinkRecord {
          id
          link
        }
        ... on UrlLinkRecord {
          id
          urlLink
        }
      }
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
