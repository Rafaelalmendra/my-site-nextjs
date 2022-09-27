import styled from "styled-components";

export const ProjectContainer = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 3rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const ProjectImage = styled.div`
  position: relative;
  width: 100%;
  height: 431px;
  border-radius: 10px;

  @media (max-width: 994px) {
    height: 370px;
  }

  @media (max-width: 854px) {
    height: 300px;
  }

  @media (max-width: 640px) {
    height: 200px;
  }

  @media (max-width: 480px) {
    height: 148px;
  }

  img {
    transition: all 0.3s ease-in-out;
  }

  &:hover,
  .imageLink:hover {
    .imageLink {
      display: flex;
    }

    img {
      transform: scale(1.12);
      filter: brightness(0.4);
    }
  }

  .imageLink {
    position: absolute;
    width: 100%;
    top: 50%;
    display: none;
    align-items: center;
    justify-content: center;
    z-index: 1;

    p {
      color: var(--white);
      font-size: 1.6rem;
      font-weight: 500;
    }
  }
`;

export const TagContainer = styled.div`
  position: absolute;
  z-index: 10;
  margin: 16px;

  @media (max-width: 850px) {
    margin: 10px;
  }
`;

export const Details = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1.8rem;

  @media (max-width: 850px) {
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

  @media (max-width: 850px) {
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
    border-radius: 1.625rem;

    @media (max-width: 575.98px) {
      min-width: 6rem;
      height: 1.875rem;

      font-size: 0.75rem;
    }
  }
`;

export const Description = styled.p`
  max-width: 35.5rem;

  line-height: 1.4rem;
  text-align: justify;

  @media (max-width: 850px) {
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

  @media (max-width: 850px) {
    flex-direction: column;
    gap: 1rem;
  }

  h3 {
    font-weight: 500;
    font-size: var(--subtitle);

    @media (max-width: 850px) {
      font-size: var(--small-subtitle);
    }
  }
`;

export const LinkAndRepository = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;

  @media (max-width: 850px) {
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

    @media (max-width: 850px) {
      font-size: 1.4rem;
    }
  }

  svg {
    transform: scale(0.95);

    path {
      stroke: ${(props) => props.theme.text};
    }

    @media (max-width: 850px) {
      transform: scale(0.75);
    }

    &:hover {
      path {
        transition: stroke 0.2s ease-in-out;
        stroke: var(--blue);
      }
    }
  }
`;
