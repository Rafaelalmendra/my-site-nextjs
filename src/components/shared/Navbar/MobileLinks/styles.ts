import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;

  width: 100vw;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: ${(props) => props.theme.background};
  transition: 0.2s;
`;

export const UlLinks = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 2.313rem;

  font-size: 2.125rem;
  font-weight: 500;

  li {
    transition: 0.2s ease-in-out;

    &:hover {
      color: var(--blue);
    }
  }
`;
