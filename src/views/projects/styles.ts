import styled from "styled-components";

export const Container = styled.div`
  min-height: calc(100vh - 120px);

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  padding-top: 3.6rem;
`;

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
    gap: 1.5rem;

    @media (max-width: 850px) {
      display: none;
    }

    a {
      font-size: 0.875rem;
      text-transform: uppercase;
      transition: color 0.2s ease-in-out;

      color: var(--grey);

      &:hover {
        color: ${(props) => props.theme.text};
      }
    }
  }
`;
