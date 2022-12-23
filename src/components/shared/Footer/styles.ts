import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  z-index: 999;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--dark-grey);

  padding: 0 2rem;

  @media (max-width: 850px) {
    padding: 0 1.25rem;
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .logo-container {
    position: relative;
    width: 34px;
    height: 34px;

    img {
      object-fit: contain;
    }
  }
`;

export const LanguageAndSocials = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;

  svg {
    color: var(--white);
    transition: color 0.2s ease-in-out;

    &:hover {
      color: var(--blue);
    }
  }
`;
