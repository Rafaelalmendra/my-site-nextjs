import styled from "styled-components";

export const ProjectContainer = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 3rem;

  @media (max-width: 850px) {
    margin-bottom: 1rem;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

export const ProjectImage = styled.div`
  position: relative;
  width: 100%;
  height: 431px;
  border-radius: 0.625rem;

  @media (max-width: 850px) {
    height: 300px;
  }

  @media (max-width: 564px) {
    height: 180px;
  }

  img {
    object-fit: cover;
    transition: all 0.2s ease-in-out;
  }

  &:hover,
  .imageLink:hover {
    .imageLink {
      display: flex;
    }

    img {
      transform: scale(1.04);
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
      display: flex;
      align-items: center;
      gap: 0.4rem;

      color: var(--white);
      font-size: 1.2rem;
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
  align-items: flex-end;
  justify-content: flex-end;
  margin-top: 1.375rem;

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
  margin-top: 22px;

  @media (max-width: 850px) {
    max-width: 100%;
    justify-content: left;
    margin-bottom: 1.5rem;
  }

  span {
    height: 1.75rem;
    min-width: 6rem;

    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.875rem;

    font-size: 0.75rem;

    border-radius: 1.625rem;
    border: 1px solid var(--grey);

    @media (max-width: 575.98px) {
      min-width: 6rem;
      height: 1.875rem;

      font-size: 0.75rem;
    }
  }
`;

export const Description = styled.div`
  max-width: 35.5rem;

  color: var(--grey);
  line-height: 1.4rem;
  text-align: justify;
  font-size: 14px;

  h6 {
    color: var(--white);
    font-weight: 500;
    font-size: 16px;
  }

  p,
  strong {
    color: var(--grey);
    line-height: 1.4rem;
    text-align: justify;
    font-size: 14px;
  }

  strong {
    color: #b8b6b6;
    font-weight: 600;
  }

  @media (max-width: 850px) {
    max-width: 100%;

    text-align: justify;
  }

  @media (max-width: 575.98px) {
    justify-content: flex-start;
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
    font-size: 1.125rem;

    @media (max-width: 850px) {
      font-size: var(--small-subtitle);
    }
  }
`;

export const LinkAndRepository = styled.div`
  display: flex;
  align-items: center;
  gap: 1.125rem;

  @media (max-width: 850px) {
    gap: 1.2rem;
  }

  a {
    color: var(--blue);
    font-size: 1.125rem;
  }

  svg {
    color: ${(props) => props.theme.text};
    transition: color 0.2s ease-in-out;

    &:hover {
      color: var(--blue);
    }
  }
`;

export const NoImage = styled.div`
  width: 100%;
  height: 431px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 10px;
  background: var(--grey);

  p {
    font-size: 1.6rem;
    font-weight: 500;
    color: var(--white);
  }
`;
