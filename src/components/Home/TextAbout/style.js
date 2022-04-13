import styled from "styled-components";

export const Container = styled.div`
  h2 {
    font-size: 2.45rem;
    font-weight: 600;
    margin-bottom: 1.7rem;
    text-transform: uppercase;
    @media (max-width: 850px) {
      font-size: 2rem;
    }
  }
  h3 {
    font-size: 1.4rem;
    font-weight: 400;
    margin-bottom: 0.6rem;
    @media (max-width: 850px) {
      font-size: 1.2rem;
    }
  }
  p {
    font-size: var(--text);
    opacity: 0.8;
    font-weight: 300;
    max-width: 36rem;
    line-height: 1.6rem;
    margin-bottom: 1.6rem;
    @media (max-width: 850px) {
      width: 90%;
      font-size: 0.875rem;
      text-align: justify;
      line-height: 1.4rem;
    }
  }
  @media (max-width: 850px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    order: 1;
    p {
      max-width: 25rem;
    }
  }
`;
export const CurriculumLink = styled.div`
  margin-bottom: 2.938rem;
  font-weight: 300;
  text-decoration: underline;
  @media (max-width: 850px) {
    margin-bottom: 1.7rem;
  }
  a {
    transition: color 0.2s ease-in-out;
    &:hover {
      color: var(--blue);
    }
  }
`;
