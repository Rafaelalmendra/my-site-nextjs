import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 2.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const A = styled.a`
  color: ${(props) => (props.active ? "var(--blue)" : props.theme.text)};
  transition: color ease-in-out 0.2s;
  &:hover {
    color: var(--blue);
  }
  button {
    color: ${(props) => (props.active ? "var(--white)" : props.theme.text)};
    background-color: ${(props) => (props.active ? "var(--blue)" : "")};
  }
`;

export const ButtonContact = styled.button`
  width: 6rem;
  height: 2.25rem;

  font-size: 1rem;
  border-radius: 0.28rem;
  border: 1px solid var(--blue);
  transition: background 0.2s ease-in-out;

  &:hover {
    background: var(--hover-blue);
  }

  @media (max-width: 575.98px) {
    width: 90vw;
    height: 3.45rem;

    font-size: 1.2rem;
  }
`;
