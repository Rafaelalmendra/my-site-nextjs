import styled from "styled-components";

export const Header = styled.header`
  position: fixed;
  z-index: 1000;
  top: 0;

  width: 100%;
`;

export const Nav = styled.nav`
  height: 6rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const UlContainer = styled.ul`
  display: flex;
  align-items: center;
  gap: 2.5rem;

  li {
    cursor: pointer;
    font-size: 1rem;
    font-weight: 400;

    a,
    i {
      transition: color ease-in-out 0.2s;

      &:hover {
        color: var(--blue);
      }
    }
  }

  @media (max-width: 575.98px) {
    gap: 1.3rem;
  }
`;

export const NavigationMobile = styled.div`
  display: none;

  @media (max-width: 850px) {
    display: flex;
  }
`;

export const UlLinks = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
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
