import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 0 35rem;
  @media (max-width: 1680px) {
    margin: 0 25rem;
  }
  @media (max-width: 1440px) {
    margin: 0 20rem;
  }
  @media (max-width: 1366px) {
    margin: 0 17rem;
  }
  @media (max-width: 1112px) {
    margin: 0 14rem;
  }
  @media (max-width: 991.98px) {
    margin: 0 12rem;
  }
  @media (max-width: 767.98px) {
    margin: 0 8rem;
  }
  @media (max-width: 575.98px) {
    margin: 0 1.5rem;
  }
  h1 {
    font-size: 2.8rem;
    font-weight: 500;
    margin-bottom: 1.765rem;
    @media (max-width: 768px) {
      font-size: 2.1rem;
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
  align-items: center;
  margin-top: 10rem;
  img {
    border-radius: 4px;
  }
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
    color: ${(props) => props.theme.techText};
    background: ${(props) => props.theme.techBackground};
    @media (max-width: 768px) {
      gap: 0.875rem;
      font-size: 0.7rem;
      margin-bottom: 0.4rem;
    }
  }
`;
export const Return = styled.div`
  margin-top: 2rem;
  font-size: 1rem;
  transition: font-size 0.2s ease-in-out;
  &:hover {
    font-size: 1.05rem;
  }
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.6rem;
  }
`;
