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
  padding: 2rem;

  @media (max-width: 850px) {
    padding: 1.25rem;
  }

  .logo-container {
    position: relative;
    width: 38px;
    height: 38px;

    img {
      object-fit: contain;
    }
  }
`;

export const NavigationContainer = styled.div`
  display: flex;
  gap: 1.4rem;
`;
