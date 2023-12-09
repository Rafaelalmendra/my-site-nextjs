import { toast } from "react-toastify";

const API_URL = "https://graphql.datocms.com/";
const API_TOKEN = process.env.NEXT_PUBLIC_DATOCMS_READ_ONLY_API_TOKEN;

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

const getRecentProjects = async () => {
  const data = await fetchAPI(`
    {
      allProjects(first: 3) {
        id
        image {
          url
          alt
        }
        title
        shortDescription
        deploy
      }
    }
  `);

  return data.allProjects;
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

const getRecentsPostsBlog = async () => {
  const data = await fetchAPI(`
    {
      allPosts(first: 3) {
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

const getFullPostBlog = async (slug: string) => {
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

export {
  getRecentProjects,
  getProjects,
  getRecentsPostsBlog,
  getAllPostsBlog,
  getFullPostBlog,
};
