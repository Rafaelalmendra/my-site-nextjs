import styled from "styled-components";

export const Post = styled.div`
  position: relative;

  width: 21.188rem;
  height: 26.188rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  color: var(--white);
  border-radius: 20px;

  cursor: pointer;
  transition: transform 0.2s ease-in-out;

  @media (max-width: 850px) {
    width: 100%;
  }

  &:hover {
    transform: translateY(-5px);
  }

  p {
    padding: 1.4rem 2rem 0 1.4rem;

    font-size: 2.4rem;
    font-weight: 500;
    line-height: 2.6rem;

    color: var(--white);

    @media (max-width: 850px) {
      font-size: 2.2rem;
      line-height: 2.675rem;
    }
  }
`;

export const ImageEffect = styled.div`
  position: absolute;
  z-index: -1;

  width: 21.188rem;
  height: 26.188rem;

  @media (max-width: 850px) {
    width: 100%;
  }

  border-radius: 20px;
  background-size: cover;
  background-position: center;

  &::before {
    content: "";

    width: 100%;
    height: 100%;

    display: block;

    opacity: 0.35;
    border-radius: 20px;
    background-image: linear-gradient(234deg, #000, #000);
  }
`;

export const InfosContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 2rem 0 1.4rem;

  gap: 0.4rem;

  span {
    font-size: 1.4rem;
    font-weight: 500;
    color: var(--white);

    &:last-child {
      font-size: 1rem;
    }
  }
`;

export const TechCardContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 0.875rem;
  margin: 0.875rem 0 1.4rem 0;
  padding: 0 2rem 0 1.4rem;
`;

export const TechCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.6rem 1.5625rem;

  font-size: 0.875rem;
  font-weight: 500;
  color: var(--black);

  background: var(--white);
  border-radius: 8px;
`;
