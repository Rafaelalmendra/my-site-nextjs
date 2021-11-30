import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const ContactContainer = styled.div`
  text-align: center;
`

export const FormContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  width: 36rem;
  height: 40rem;
  margin-top: 8rem;
  margin-bottom: 4rem;
  z-index: 100;

  border-radius: 0.8rem;
  background: #212529;

  box-shadow: 9px 11px 14px rgba(0, 0, 0, 0.12);

  @media (max-width: 575.98px) {
    width: 31rem;
  }

  @media (max-width: 460px) {
    width: 26rem;
  }

  @media (max-width: 390px) {
    width: 20rem;
    height: 38rem;
    margin-top: 8rem;
    margin-bottom: 4rem;

    p {
      font-size: var(--small-subtitle);
    }

    label input, textarea{
      width: 88%;
    }
  }

  p {
    font-weight: 500;
    margin-bottom: 3rem;
    font-size: var(--small-subtitle);
    color: var(--white);
  }

  label {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    
    margin-bottom: 2rem;

    font-size: 1.1rem;
    font-weight: 300;
    color: var(--white);

    input, textarea {
      width: 90%;

      font-size: 1rem;
      color: var(--super-light-black);

      border-bottom: 1px solid var(--super-light-black);
      background: none;
      
      transition: border-bottom 0.2s ease-in-out;

      &::placeholder {
        color: var(--super-light-black);
        font-size: 0.9rem;
        font-weight: 300;
      }

      &:focus {
        border-bottom: 1px solid var(--blue);
      }

      &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      }
    }
  }

  textarea {
    height: 5.5rem;
    resize: none;
  }

  .contact-button {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 90%;
    height: 3.8rem;

    border-radius: 0.4rem;

    font-size: 1.3rem;
    font-weight: 500;
    color: var(--white);
    background: var(--blue);

    cursor: pointer;
    transition: background ease 0.2s;

    &:hover {
      background: var(--hover-blue);
    }
    
    @media (max-width: 575.98px) {
      width: 96%;
    }
  }
`

export const ContainerForm = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-left: 3.5rem;

  @media (max-width: 575.98px) {
    margin-left: 1.4rem;
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