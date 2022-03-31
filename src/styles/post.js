import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  min-height: 100vh;
  h1 {
    font-size: 2.8rem;
    font-weight: 500;
    margin-bottom: 1.765rem;
    @media (max-width: 768px) {
      font-size: 2.1rem;
    }
  }
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
  }
  .link-blog {
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
  .image-blog {
    margin-top: 1rem;
    margin-bottom: 1rem;
    border-radius: 8px;
  }
`;
export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  min-width: 100%;
  align-items: center;
  margin-top: 10rem;
`;
export const Techs = styled.span`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 1.4rem;
  gap: 1rem;
  span {
    min-width: 5.875rem;
    height: 1.688rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    margin-bottom: 1rem;

    font-size: 0.775rem;
    font-weight: 500;
    text-transform: uppercase;
    border-radius: 8.25rem;

    @media (max-width: 768px) {
      font-size: 0.7rem;
      gap: 0.875rem;
      margin-bottom: 0.4rem;
    }
  }
`;
export const AuthorAndDate = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 3rem;
  span {
    font-size: 1rem;
    font-weight: 400;
    &:last-child {
      font-size: 0.875rem;
    }
    strong {
      font-weight: 500;
    }
  }
`;
export const AuthorImage = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0.875rem;
  margin-bottom: 1rem;
  clip-path: circle();
`;
export const Return = styled.div`
  margin-top: 2rem;
`;
