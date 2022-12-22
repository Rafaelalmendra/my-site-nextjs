const API_URL = "https://graphql.datocms.com/";
const API_TOKEN = process.env.DATOCMS_READ_ONLY_API_TOKEN;

const fetchAPI = async (query, { variables }: any = {}) => {
  const res = await fetch(API_URL, {
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

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }

  return json.data;
};

const getProjects = async () => {
  const data = await fetchAPI(`
    {
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
  `);

  return data.allProjects;
};

const getAllPostsBlog = async () => {
  const data = await fetchAPI(`
    {
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
  `);

  return data.allPosts;
};

export { getProjects, getAllPostsBlog };
