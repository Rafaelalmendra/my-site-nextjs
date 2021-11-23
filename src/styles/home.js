import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
`

export const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const Logo = styled.div`
  position: relative;
  //max-width: 18rem;
  margin-top: 6rem;
  
  transform: translateY(0);
  animation: float 3s ease-in-out infinite;
  z-index: 1;

`

export const Title = styled.div`
  margin-top: 5rem;
  margin-bottom: 2rem;

  font-size: 1.8rem;
  font-weight: 500;
  z-index: 1;
`

export const ButtonHome = styled.button`
  width: 13.75rem;
  height: 4.125rem;

  font-size: 1.6rem;
  font-weight: 500;

  background-color: var(--blue);
  color: var(--white);
  
  cursor: pointer;
  border-radius: 0.5rem;

  transition: 0.2s ease-in-out;

  .bi-caret-down-fill {
    color: var(--white);
  }

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 575.98px) {
    width: 10rem;
    height: 3.4rem;
    border-radius: 0.5rem;
    font-size: var(--small-subtitle);
  }
`

export const VectorOne = styled.div`
  position: absolute;
  left: 7.5rem;
  bottom: 7.5rem;
  filter: blur(0.35rem);
  transition: filter 0.2s ease-in-out;

  &:hover {
    filter: blur(0);
  }

  @media (max-width: 575.98px) {
    left: 0.5rem;
    bottom: 17rem;
  }
`

export const VectorTwo = styled.div`
  position: absolute;
  right: 11.25rem;
  top: 11.25rem;
  filter: blur(0.35rem);

  transition: filter 0.2s ease-in-out;

  &:hover {
    filter: blur(0);
  }

  @media (max-width: 1199.98px) {
    right: 3rem;
  }

  @media (max-width: 767.98px) { 
    right: 1rem;
    top: 16rem;
    width: 9.375rem;
  }

  @media (max-width: 575.98px) {
    right: 0.5rem;
    top: 12rem;
  }
`