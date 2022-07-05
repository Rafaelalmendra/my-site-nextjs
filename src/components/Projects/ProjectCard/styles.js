import styled from "styled-components";

export const ProjectContainer = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 6.75rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const ProjectImage = styled.div`
  img {
    border-radius: 0.6rem;
  }
  @media (max-width: 575.98px) {
    min-width: 100%;
  }
`;

export const Details = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2.8rem;

  @media (max-width: 768px) {
    align-items: start;
    margin-top: 2rem;
    gap: 4rem;
  }
`;

export const Techs = styled.div`
  max-width: 30rem;

  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;

  @media (max-width: 768px) {
    max-width: 100%;
    justify-content: left;
    margin-bottom: 1.5rem;
  }

  span {
    height: 2rem;
    min-width: 7rem;

    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;

    font-size: 0.9rem;
    border: 1px solid;
    border-radius: 26px;

    @media (max-width: 575.98px) {
      min-width: 6rem;
      height: 1.875rem;

      font-size: 0.75rem;
    }
  }
`;

export const Text = styled.div`
  max-width: 35.5rem;

  line-height: 1.4rem;
  text-align: justify;

  @media (max-width: 768px) {
    max-width: 100%;

    text-align: justify;
    font-size: var(--small-text);
  }

  @media (max-width: 575.98px) {
    justify-content: flex-start;

    span {
      width: 6rem;
      font-size: 0.8rem;
    }
  }
`;

export const NameAndDescription = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  margin-top: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }

  h3 {
    font-weight: 500;
    font-size: var(--subtitle);

    @media (max-width: 768px) {
      font-size: var(--small-subtitle);
    }
  }
`;

export const LinkAndRepository = styled.div`
  display: flex;
  gap: 1.6rem;

  @media (max-width: 768px) {
    gap: 1.2rem;
  }

  a {
    color: var(--blue);
    font-size: 1.125rem;
  }

  i {
    font-size: 1.6rem;
    transition: color 0.2s ease-in-out;

    &:hover {
      color: var(--blue);
    }

    @media (max-width: 768px) {
      font-size: 1.4rem;
    }
  }
`;
