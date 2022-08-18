import styled from "styled-components";

export const Container = styled.main`
  min-height: calc(100vh - 120px);

  display: flex;
  align-items: center;
  justify-content: space-between;

  .bi-caret-right-fill {
    color: var(--white);
  }

  @media (max-width: 850px) {
    flex-direction: column;
    justify-content: center;
    margin: 1.4rem 0 0 0;
  }
`;

export const TextAbout = styled.div`
  a {
    width: 100%;
  }
  h2 {
    margin-bottom: 1.7rem;

    font-weight: 600;
    font-size: 2.45rem;
    text-transform: uppercase;

    @media (max-width: 850px) {
      font-size: 2rem;
    }
  }

  h3 {
    margin-bottom: 0.6rem;
    font-weight: 400;
    font-size: 1.4rem;

    @media (max-width: 850px) {
      font-size: 1.2rem;
    }
  }

  p {
    max-width: 36rem;
    margin-bottom: 1.6rem;

    font-weight: 300;
    line-height: 1.6rem;
    font-size: var(--text);

    opacity: 0.8;

    @media (max-width: 850px) {
      width: 90%;

      font-size: 0.875rem;
      text-align: center;
      line-height: 1.4rem;
    }
  }

  @media (max-width: 850px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    order: 1;

    text-align: center;

    p {
      max-width: 25rem;
    }
  }
`;

export const CurriculumLink = styled.div`
  font-weight: 300;
  text-decoration: underline;

  @media (max-width: 850px) {
    margin-bottom: 1.7rem;
  }

  a {
    transition: color 0.2s ease-in-out;

    &:hover {
      color: var(--blue);
    }
  }
`;

export const InfosContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-bottom: 2.938rem;

  @media (max-width: 850px) {
    align-items: center;
  }
`;

export const InfosText = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  span {
    color: ${(props) =>
      props.theme.title === "dark" ? "#DEDEDE" : "var(--black)"};
  }
`;

export const InfosTextLink = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  span {
    color: ${(props) =>
      props.theme.title === "dark" ? "#DEDEDE" : "var(--black)"};
    transition: color ease-in-out 0.2s;
  }

  a {
    text-decoration: underline;
    transition: color ease-in-out 0.2s;
  }

  span:hover,
  a:hover {
    color: var(--blue);
  }
`;

export const ImageAbout = styled.div`
  display: flex;
  justify-content: center;
`;

export const ReactIcon = styled.div`
  z-index: 2;
  left: 4.8rem;
  position: relative;
  min-width: 8rem;
  transform: translateY(0);
  animation: float 3s ease-in-out infinite;

  @media (max-width: 850px) {
    display: none;
  }
`;

export const ImageProfile = styled.div`
  position: relative;
  width: 342px;
  height: 366px;

  img {
    border-radius: 10px;
    object-fit: cover;
  }

  @media (max-width: 850px) {
    width: 168px;
    height: 168px;

    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
  }
`;
