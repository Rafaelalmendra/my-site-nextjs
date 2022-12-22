export interface CardProps {
  image: string;
  title: string;
  description?: string;
  link: string;

  blog?: boolean;
  author?: string;
  date?: string;
  technologies?: {
    technologie: string;
  }[];
}
