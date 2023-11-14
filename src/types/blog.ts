export interface BlogPost {
  slug: string;
  date: string;
  title: string;
  author: string;
  thumbnail: {
    url: string;
  };
  technologies: {
    technologie: string;
  }[];
}

export interface BlogPostData {
  slug: string;
  title: string;
  date: string;
  author: string;
  authorImage: {
    url: string;
  };
  thumbnail: {
    url: string;
    alt: string;
  };
  technologies: {
    technologie: string;
  }[];
  content: string;
}
