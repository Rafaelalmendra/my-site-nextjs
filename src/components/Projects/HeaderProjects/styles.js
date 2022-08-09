import styled from "styled-components";

export const TitleProjects = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 2rem;

  @media (max-width: 850px) {
    justify-content: center;
  }

  h2 {
    font-size: 2.4rem;
    font-weight: 600;

    @media (max-width: 850px) {
      font-size: 1.6rem;
    }
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 1.875rem;

    @media (max-width: 850px) {
      display: none;
    }

    a {
      font-size: 0.875rem;
      text-transform: uppercase;
      transition: color 0.2s ease-in-out;

      &:hover {
        color: var(--blue);
      }
    }
  }
`;
