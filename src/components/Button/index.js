import styled from "styled-components";

const Button = styled.button`
  z-index: 1;
  width: 13rem;
  height: 4rem;

  font-size: 1.7rem;
  font-weight: 500;

  color: var(--white);
  background-color: var(--blue);

  border-radius: 0.65rem;
  transition: 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: var(--hover-blue);
  }

  @media (max-width: 768px) {
    width: 90vw;
    font-size: 1.4rem;
  }
`;

export default Button;
