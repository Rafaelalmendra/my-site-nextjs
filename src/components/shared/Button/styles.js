import styled from "styled-components";

export const ButtonContainer = styled.button`
  width: ${(props) => (props.width ? props.width : "auto")};

  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "var(--blue)"};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "1.4rem")};

  cursor: pointer;
  transition: 0.2s ease-in-out;

  ${(props) =>
    props.variant === "primary" &&
    `
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.6rem;
      padding: 0.875rem 1.875rem;

      font-weight: 500;
      border-radius: 4px;
      color: var(--white);

      &:hover {
        color: var(--white) !important;
        background: var(--hover-blue);
      }

      &:disabled {
        cursor: not-allowed;
        background: var(--hover-blue);
      }
  `}

  ${(props) =>
    props.variant === "secondary" &&
    `
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.6rem;
    padding: 0.875rem 1.875rem;

    border: 1px solid var(--grey);
    background: none;
    border-radius: 4px;

    font-weight: 500;
    color: var(--grey) !important;

    &:hover {
      border-color: var(--white);
      color: var(--white) !important;
    }

    &:disabled {
      cursor: not-allowed;
      background: var(--black);
    }
  `}

${(props) =>
    props.variant === "tertiary" &&
    `
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 0.4rem;

      font-weight: 500;
      background: none;
      border-radius: 4px;
      color: var(--blue);

      &:hover {
        color: var(--hover-blue);
      }

      &:disabled {
        cursor: not-allowed;
        color: var(--hover-blue);
      }
  `}

  @media (max-width: 850px) {
    width: 100%;
  }
`;
