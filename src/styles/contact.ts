import styled from "styled-components";

export const Container = styled.div`
  min-height: calc(100vh - 120px);

  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const FormContainer = styled.div`
  h1 {
    font-size: 2rem;
    font-weight: 600;

    @media (max-width: 445px) {
      text-align: center;
      font-size: 1.4rem;
    }
  }
`;
