import styled from "styled-components";

export const FormContainer = styled.div`
  width: 36rem;
  height: 40rem;
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 8rem 0 4rem 0;
  text-align: center;
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
    margin: 8rem 0 4rem 0;
    p {
      font-size: 2.5rem;
    }
    label input,
    textarea {
      width: 88%;
    }
  }
  p {
    margin-bottom: 3rem;
    font-weight: 500;
    font-size: 2.5rem;
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
    input,
    textarea {
      width: 90%;
      font-size: 1rem;
      color: var(--light-black);
      border-bottom: 1px solid var(--light-black);
      background: none;
      transition: border-bottom 0.2s ease-in-out;
      &::placeholder {
        color: var(--light-black);
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
    width: 90%;
    height: 3.8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.3rem;
    font-weight: 500;
    color: var(--white);
    background: var(--blue);
    border-radius: 0.4rem;
    cursor: pointer;
    transition: background ease 0.2s;
    &:hover {
      background: var(--hover-blue);
    }
    @media (max-width: 575.98px) {
      width: 96%;
    }
  }
`;
export const ContainerForm = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-left: 3.5rem;
  @media (max-width: 575.98px) {
    margin-left: 1.4rem;
  }
`;
