const API_URL = "https://graphql.datocms.com/";
const API_TOKEN = process.env.DATOCMS_READ_ONLY_API_TOKEN;

async function fetchCmsAPI(query, { variables } = {}) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_TOKEN}`,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });
  const json = await response.json();
  if (json.errors) {
    throw new Error("Failed to fetch CMS API");
  }
  return json.data;
}

export async function getAllPosts() {
  const data = await fetchCmsAPI(`
    {
      allPosts {
        id
        slug
        technologie1
        technologie2
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
  `);
  return data.allPosts;
}

export default { getAllPosts };
