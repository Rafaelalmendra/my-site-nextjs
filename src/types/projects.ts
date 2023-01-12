export interface ProjectProps {
  id: number;
  title: string;
  image: {
    url: string;
    alt: string;
  };
  deploy: string;
  github: string;
  figma: string;
  ismyproject: boolean;
  description: string;
  shortDescription: string;
  technologies: {
    technologie: string;
  }[];
}
