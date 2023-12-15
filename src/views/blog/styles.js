import styled from "styled-components";

export const Container = styled.div`
  min-height: calc(100vh - 120px);

  display: flex;
  flex-direction: column;
  padding-top: 3.6rem;

  @media (max-width: 850px) {
    padding: 1.5rem 0;
  }

  h1 {
    font-weight: 600;
    font-size: 2.375rem;
    margin-bottom: 1.5rem;

    @media (max-width: 850px) {
      font-size: 2rem;
    }
  }
`;

export const ContainerCards = styled.main`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2.625rem;

  @media (max-width: 850px) {
    grid-template-columns: 1fr;
  }

  a {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 4rem;

    @media (max-width: 850px) {
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
`;
