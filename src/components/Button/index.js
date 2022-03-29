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
  transform: scale(1.05);
  transition: 0.2s ease-in-out;
  cursor: pointer;
`;

export default Button;
