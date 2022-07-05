import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  min-height: 34vh;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16rem;

  h2 {
    max-width: 450px;
    margin-bottom: 1.125rem;

    font-size: 1.8rem;
    font-weight: 500;
  }

  @media (max-width: 1199.98px) {
    gap: 14rem;
  }

  @media (max-width: 991.98px) {
    gap: 5rem;
  }

  @media (max-width: 850px) {
    flex-direction: column;
    justify-content: center;
    gap: 0;
  }
`;

export const Text = styled.div`
  h2 {
    line-height: 2.4rem;
  }

  @media (max-width: 850px) {
    margin-top: 2rem;
    text-align: center;

    h2 {
      font-size: 1.5rem;
    }
  }
`;

export const Vector = styled.div`
  max-width: 27.5rem;

  @media (max-width: 850px) {
    max-width: 15rem;
    margin: 1rem 0 2rem 0;
  }
`;
