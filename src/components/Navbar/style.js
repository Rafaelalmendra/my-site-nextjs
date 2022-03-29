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
export const Logo = styled.div`
  cursor: pointer;
  max-width: 2.5rem;
`;
export const ButtonContact = styled.button`
  width: 6rem;
  height: 2.25rem;
  border-radius: 0.28rem;
  font-size: 1rem;
  color: #ffffff;
  transition: transform 0.2s ease-in-out;
  background-color: #32c5ff;
  &:hover {
    transform: scale(1.05);
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
      color: #2eb2e5;
    }
  }
`;
