import styled from "styled-components";

export const Open = styled.div`
  font-size: 1.8rem;
  cursor: pointer;

  @media (max-width: 575.98) {
    width: 1.9rem;
  }
`;

export const Close = styled.div`
  position: relative;
  z-index: 1000;

  font-size: 2.6rem;
  cursor: pointer;
`;
