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
        title
        text
        description
        date
        media {
          url(imgixParams: {})
        }
      }
    }
  `);
  return data.allPosts;
}

export default { getAllPosts };
