import { toast } from "react-toastify";

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
    toast.error("Failed to fetch API");
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

const getFullPostBlog = async (slug) => {
  const data = await fetchAPI(
    `
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
  `,
    {
      variables: {
        slug,
      },
    }
  );

  return data.allPosts[0];
};

export { getProjects, getAllPostsBlog, getFullPostBlog };
