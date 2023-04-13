import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translate(-50%, 100%);
  }

  to {
    opacity: 1;
    transform: translate(-50%, -50%);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: translate(-50%, -50%);
  }

  to {
    opacity: 0;
    transform: translate(-50%, 100%);
  }
`;

export const Modal = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;

  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  flex-direction: column;
  justify-content: space-between;
  padding: 30px;

  min-width: 760px;
  min-height: 458px;
  border-radius: 4px;

  background-color: var(--dark-grey);
  animation: ${({ isOpen }) => (isOpen ? fadeIn : fadeOut)} 0.8s ease-in-out;

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }

  svg {
    cursor: pointer;
    transition: color ease-in-out 0.2s;

    &:hover {
      color: var(--blue);
    }
  }
`;

export const StyledOverlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9998;

  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  background: rgba(0, 0, 0, 0.3);
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    font-size: 22px;
    font-weight: 600;
  }
`;

export const Footer = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 14px;
  margin-top: 30px;
`;

export const Content = styled.div`
  width: 100%;
  min-height: 100%;

  margin-top: 20px;
`;
