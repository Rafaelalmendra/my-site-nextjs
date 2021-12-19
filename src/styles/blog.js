import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;
`

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2.275rem;
  margin-top: 6rem;
  margin-bottom: 4.875rem;

  h1 {
    font-size: 2.625rem;
    font-weight: 500;
    color: var(--blue);

    @media (max-width: 850px) {
      font-size: 2.2rem;
    }

    @media (max-width: 575.98px) {
      font-size: 1.575rem;
    }
  }
`

export const Post = styled.div`
  width: 21.188rem;
  height: 26.188rem;
  display: flex;
  flex-direction: column;
  
  border-radius: 20px;
  color: var(--white);

  transition: transform 0.2s ease-in-out;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-0.375rem);
  }

  p {
    padding-left: 2rem;
    padding-top: 2rem;
    font-size: 2.625rem;
    font-weight: 500;
    line-height: 3rem;
    margin-bottom: 10rem;

    @media (max-width: 850px) {
      font-size: 2.2rem;
      line-height: 2.675rem;
    }
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;

    span {
    padding-left: 2rem;
    font-size: 1.125rem;

    &:last-child {
      font-size: 0.875rem;
    }

      strong {
        font-weight: 500;
      }
    }
  }
  
`

export const ImageEffect = styled.div`
  position: absolute;
  width: 21.188rem;
  z-index: -1;
  height: 26.188rem;
  border-radius: 20px;
  background: no-repeat center center;
  background-size: cover;
  
  &::before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 20px;
    opacity: 0.35;
    background-image: linear-gradient(234deg, #000, #000);
  }
`

export const ContainerPost = styled.div`
  max-width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;

  @media (max-width: 850px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  
`