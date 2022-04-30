import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const FormContainer = styled.div`
  margin-top: 8.0625rem;

  @media (max-width: 768px) {
    margin-top: 8rem;
  }

  h1 {
    font-size: 2rem;
    font-weight: 600;

    @media (max-width: 445px) {
      text-align: center;
      font-size: 1.4rem;
    }
  }
`;
