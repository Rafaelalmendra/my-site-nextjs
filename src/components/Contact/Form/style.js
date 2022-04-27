import styled from "styled-components";

export const FormContainer = styled.div`
  margin-top: 3.1875rem;

  form {
    display: flex;
    flex-direction: column;
  }
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  label {
    font-size: 1.2rem;
    margin-top: 1rem;

    @media (max-width: 445px) {
      margin-top: 0;
    }
  }

  input {
    height: 3rem;
    margin-top: 1rem;
    padding-left: 0.875rem;
    border: 1px solid;
    border-radius: 4px;
    &:active,
    &:focus {
      border: 1px solid var(--blue);
    }
  }

  textarea {
    height: 18rem;
    margin-top: 1rem;
    padding-left: 0.875rem;
    padding: 0.875rem 0.875rem 0.875rem 0.875rem;
    border: 1px solid;
    border-radius: 4px;
    resize: none;

    &:active,
    &:focus {
      border: 1px solid var(--blue);
    }
  }
`;

export const TwoFields = styled.div`
  display: flex;
  width: 100%;
  gap: 2rem;

  @media (max-width: 445px) {
    flex-direction: column;
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 13rem;
  height: 4rem;

  font-size: 1.7rem;
  font-weight: 500;

  color: var(--white);
  background-color: var(--blue);

  border-radius: 4px;
  transition: 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: var(--hover-blue);
  }

  @media (max-width: 768px) {
    width: 100%;
    font-size: 1.4rem;
  }
`;
