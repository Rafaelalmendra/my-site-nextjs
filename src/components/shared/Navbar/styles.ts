import styled from "styled-components";

export const NavbarContainer = styled.nav`
  position: fixed;
  z-index: 100;
  top: 0;

  width: 100%;
`;

export const NavbarContent = styled.div`
  height: 4.625rem;

  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 32px;
`;

export const NavigationContainer = styled.div`
  display: flex;
  gap: 1.4rem;
`;
