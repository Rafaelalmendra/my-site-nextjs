import styled from "styled-components";

export const Container = styled.div`
  min-height: calc(100vh - 120px);

  display: flex;
  justify-content: center;
  flex-direction: column;

  h1 {
    font-weight: 600;
    font-size: 2.375rem;
    margin-bottom: 1.5rem;
  }
`;

export const ContainerCards = styled.main`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2.625rem;

  @media (max-width: 850px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 4rem;
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
