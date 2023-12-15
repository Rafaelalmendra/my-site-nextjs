import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;

  width: 100%;

  @media (max-width: 850px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 4rem;
  }

  .card {
    width: 21.1875rem;
    height: 26.1875rem;
    border-radius: 20px;

    @media (max-width: 850px) {
      width: 90vw;
    }
  }
`;
