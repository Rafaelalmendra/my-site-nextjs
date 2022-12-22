import styled from "styled-components";

export const Container = styled.div`
  position: relative;

  .mobile-links {
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
  }
`;

export const Close = styled.div`
  position: absolute;
  z-index: 1000;

  top: 2rem;
  right: 2rem;

  font-size: 2.6rem;
  cursor: pointer;
`;
