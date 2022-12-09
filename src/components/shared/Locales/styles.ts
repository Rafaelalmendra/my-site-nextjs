import styled from "styled-components";

export const LocalesContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  justify-content: center;
  gap: 0.5rem;

  cursor: pointer;

  .locales-open-container {
    position: absolute;
    z-index: 10;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    margin-top: 7.675rem;
    padding: 0.75rem 1rem;

    border-radius: 0.5rem;
    background: ${(props) => props.theme.text};
  }
`;

export const ImageFlagContainer = styled.div`
  position: relative;
  width: 2.0625rem;
  height: 1.375rem;

  img {
    object-fit: cover;
    border-radius: 1.75rem;
  }
`;

export const LocalesOpenContainer = styled.div`
  position: absolute;
  z-index: 10;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  margin-top: 7.675rem;
  padding: 0.75rem 1rem;

  border-radius: 0.5rem;
  background: ${(props) => props.theme.text};
`;

export const Locale = styled.div`
  display: flex;
  align-items: center;
  gap: 0.875rem;

  cursor: pointer;

  p {
    color: ${(props) => props.theme.background};
    font-size: 0.875rem;
  }

  &:hover {
    p {
      color: var(--blue);
    }
  }
`;

export const FlagImage = styled.div`
  position: relative;
  width: 1.5rem;
  height: 1rem;

  img {
    object-fit: cover;
    border-radius: 0.25rem;
  }
`;
