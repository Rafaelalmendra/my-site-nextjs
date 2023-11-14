import styled from "styled-components";

export const Content = styled.form``;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  label {
    font-size: 18px;
    color: var(--grey);
    margin-top: 1rem;

    @media (max-width: 445px) {
      margin-top: 0;
    }
  }

  input {
    height: 3rem;
    margin-top: 1rem;
    padding-left: 0.875rem;
    border: 1px solid var(--grey);
    border-radius: 4px;
    background: none;
    &:active,
    &:focus {
      border: 1px solid var(--blue);
    }
  }

  textarea {
    height: 140px;
    margin-top: 1rem;
    padding: 14px;
    border: 1px solid var(--grey);
    border-radius: 4px;
    background: none;
    resize: none;

    &:active,
    &:focus {
      border: 1px solid var(--blue);
    }
  }

  span {
    color: #ff3333;
    margin-top: 0.5rem;
  }
`;
