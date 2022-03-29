import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;
`;
export const Title = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2.275rem;
  margin-top: 2rem;
  margin-bottom: 4.875rem;
  font-size: 2.625rem;
  font-weight: 500;
  color: var(--blue);
  @media (max-width: 850px) {
    font-size: 2.2rem;
  }
  @media (max-width: 575.98px) {
    font-size: 1.575rem;
  }
`;
