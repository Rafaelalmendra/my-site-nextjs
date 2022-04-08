import styled from "styled-components";

export const UlContainer = styled.ul`
  display: flex;
  align-items: center;
  gap: 2.5rem;
  li {
    cursor: pointer;
    font-size: 1rem;
    font-weight: 400;
  }
  @media (max-width: 575.98) {
    gap: 1.3rem;
  }
`;
export const ButtonContact = styled.button`
  width: 6rem;
  height: 2.25rem;
  border-radius: 0.28rem;
  font-size: 1rem;
  color: var(--white);
  transition: background 0.2s ease-in-out;
  //background-color: var(--blue);
  border: 1px solid var(--blue);
  &:hover {
    background: var(--hover-blue);
  }
  @media (max-width: 575.98) {
    width: 100%;
  }
`;
