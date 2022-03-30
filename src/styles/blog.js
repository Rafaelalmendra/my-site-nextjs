import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
export const ContainerCards = styled.main`
  display: flex;
  flex-wrap: wrap;
  gap: 4rem;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 4rem;
  }
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
  @media (max-width: 885px) {
    font-size: 2.2rem;
    margin: 9rem 0 2.875rem 0;
  }
  @media (max-width: 575.98px) {
    font-size: 1.575rem;
  }
`;
