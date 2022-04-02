import styled from "styled-components";

const Container = styled.div`
  h2 {
    font-size: 1.8rem;
    font-weight: 500;
    margin-bottom: 0.575rem;
    margin-top: 2rem;
    width: 100%;
    @media (max-width: 768px) {
      font-size: 1.6rem;
    }
  }
  p {
    font-size: 1.1rem;
    font-weight: 300;
    line-height: 2rem;
    text-align: justify;
    width: 100%;
    margin-bottom: 1rem;
  }
  a {
    font-size: 1.1rem;
    color: var(--blue);
  }
  img {
    margin-top: 1rem;
    margin-bottom: 1.125rem;
    width: 30rem;
    @media (max-width: 768px) {
      width: 100%;
    }
  }
`;

export default Container;
