import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;
export const ReactIcon = styled.div`
  position: relative;
  min-width: 8rem;
  z-index: 2;
  left: 4.8rem;
  transform: translateY(0);
  animation: float 3s ease-in-out infinite;
  @media (max-width: 767.98px) {
    display: none;
  }
`;
export const ImageProfile = styled.div`
  @media (max-width: 767.98px) {
    max-width: 10rem;
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
    img {
      border-radius: 50%;
    }
`;
