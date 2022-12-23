import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  z-index: 10;

  align-items: center;
  justify-content: center;

  right: 1rem;
  bottom: 1rem;

  width: 60px;
  height: 60px;
  border-radius: 50%;

  filter: drop-shadow(0px 2px 7px rgba(0, 0, 0, 0.25));
  background: var(--blue);

  cursor: pointer;
  transition: background 0.2s ease-in-out, transform 0.2s ease-in-out;

  &:hover {
    background: var(--hover-blue);
    transform: translateY(-0.375rem);
  }
`;
