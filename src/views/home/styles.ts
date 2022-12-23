import styled from "styled-components";

export const Container = styled.main`
  min-height: calc(100vh - 120px);

  display: flex;
  flex-direction: column;
  padding-top: 3.6rem;

  @media (max-width: 850px) {
    flex-direction: column;
    justify-content: flex-start;
    padding: 1.5rem 0;
  }
`;

export const Header = styled.div`
  margin-bottom: 2rem;

  @media (max-width: 850px) {
    display: flex;
    flex-direction: column;
  }

  h2 {
    font-weight: 600;
    font-size: 2.375rem;
    margin-bottom: 1.5rem;

    @media (max-width: 850px) {
      font-size: 2rem;
    }
  }

  p {
    max-width: 36rem;
    margin-bottom: 1.5rem;

    font-weight: 300;
    font-size: 0.875rem;
    color: var(--grey);

    @media (max-width: 850px) {
      width: 90%;
      text-align: left;
      font-size: 0.875rem;
      line-height: 1.4rem;
    }
  }

  svg {
    transition: transform ease-in-out 0.2s;
  }

  button:hover {
    svg {
      transform: translateX(0.4rem);
    }
  }
`;

export const SubtitleHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 4px;
  gap: 0.375rem;

  h3,
  a {
    font-size: 1.125rem;

    @media (max-width: 850px) {
      font-size: 1rem;
    }
  }

  h3 {
    font-weight: 400;
  }

  a {
    font-weight: 600;
    transition: color ease-in-out 0.2s;

    &:hover {
      color: var(--blue);
      text-decoration: underline;
    }
  }
`;
