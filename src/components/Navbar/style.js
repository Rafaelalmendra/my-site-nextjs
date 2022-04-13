import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  z-index: 1000;
  position: fixed;
  top: 0;
`;
export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 6rem;
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
  font-size: 2.125rem;
  font-weight: 500;
  gap: 2.313rem;
  li {
    transition: 0.2s ease-in-out;
    &:hover {
      color: var(--blue);
    }
  }
`;
