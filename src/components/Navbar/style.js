import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  z-index: 1000;
  position: fixed;
  top: 0;
  li {
    cursor: pointer;
  }
  .navigation-mobile {
    display: none;
  }
`;
export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 6rem;
  .link {
    font-size: 1.4rem;
  }
`;
export const MenuMain = styled.div`
  display: flex;
  gap: 2.5rem;
  align-items: center;
  @media (max-width: 575.98) {
    gap: 1.3rem;
  }
`;
export const UlContainer = styled.ul`
  display: flex;
  align-items: center;
  gap: 2.5rem;
  li {
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
  background-color: var(--blue);
  &:hover {
    background: var(--hover-blue);
  }

  @media (max-width: 575.98) {
    width: 100%;
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
export const HamburguerIcon = styled.div`
  font-size: 1.8rem;
  cursor: pointer;
  @media (max-width: 575.98) {
    width: 1.9rem;
  }
`;
export const CloseIcon = styled.div`
  font-size: 2.6rem;
  position: relative;
  cursor: pointer;
  z-index: 1000;
`;
