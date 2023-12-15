import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  &:hover {
    .link,
    svg {
      color: var(--blue);
    }

    svg {
      transform: translateX(0.4rem);
    }
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 14.875rem;
  border-radius: 4px;

  margin-bottom: 1rem;

  img {
    width: 100%;
    border-radius: 4px;
    height: 100%;
    object-fit: cover;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  h6 {
    font-size: 1rem;
    font-weight: 500;

    margin-bottom: 0.5rem;
  }

  p {
    overflow: hidden;
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    line-clamp: 2;
    margin-bottom: 0.875rem;

    color: var(--grey);
    font-size: 0.875rem;
    line-height: 1.4rem;
  }

  .link {
    display: flex;
    align-items: center;
    gap: 0.4rem;

    font-size: 0.875rem;
    color: ${(props) => props.theme.text};

    transition: color 0.2s ease-in-out;
  }

  svg {
    transition: transform 0.2s ease-in-out;
  }
`;

export const ContainerBlog = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-0.4rem);
  }
`;

export const ImageContainerBlog = styled.div`
  position: relative;
  width: 100%;
  height: 10.875rem;
  margin-bottom: 1rem;

  img {
    width: 100%;
    border-radius: 4px 4px 0 0;
    height: 100%;
    object-fit: cover;
  }
`;

export const ContentBlog = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  h6 {
    overflow: hidden;
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    line-clamp: 1;
    margin-bottom: 0.5rem;

    font-size: 1rem;
    font-weight: 500;
  }

  .link {
    display: flex;
    align-items: center;
    gap: 0.4rem;

    font-size: 0.875rem;
    color: var(--white);

    transition: color 0.2s ease-in-out;

    svg {
      transition: transform 0.2s ease-in-out;
    }

    &:hover {
      color: var(--blue);

      svg {
        transform: translateX(0.4rem);
      }
    }
  }
`;

export const AuthorAndDate = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  margin: 0.25rem 0 0.875rem 0;

  p {
    margin: 0;

    color: var(--grey);
    font-size: 0.875rem;
  }
`;

export const TechListBlog = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const Tech = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;

  color: ${(props) => props.theme.background};
  font-size: 0.875rem;

  background: ${(props) => props.theme.text};
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
`;
