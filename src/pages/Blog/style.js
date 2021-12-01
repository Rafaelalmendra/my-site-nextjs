import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
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

  h1 {
    font-size: 2.625rem;
    font-weight: 500;
    color: var(--blue);
  }

  input {
    width: 24rem;
    height: 3.375rem;
    padding-left: 1rem;
    margin-bottom: 4.875rem;
    
    font-size: 1rem;

    border: 1px solid var(--blue);
    border-radius: 4px;
  }
`

export const Post = styled.div`
  width: 339px;
  height: 419px;
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
  width: 339px;
  z-index: -1;
  height: 419px;
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
  display: flex;
  gap: 2rem;
`