import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 16rem;
  min-height: 34vh;

  h2 {
    font-size: 1.8rem;
    max-width: 450px;
    font-weight: 500;
    margin-bottom: 1.125rem;
  }

  @media (max-width: 1199.98px) {
    gap: 14rem;
  }

  @media (max-width: 991.98px) {
    gap: 5rem;
  }

  @media (max-width: 575.98px) {
    flex-direction: column;
    justify-content: center;
    gap: 0;
  }
`

export const FooterVector = styled.div`
  max-width: 27.5rem;

  @media (max-width: 575.98px) {
    max-width: 15rem;
    margin: 1rem 0 2rem 0;
  }
`

export const FooterText = styled.div`
  @media (max-width: 575.98px) {
    margin-top: 2rem;
    text-align: center;

    h2 {
      font-size: 1.5rem;
    }
  }
`