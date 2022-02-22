import styled from "styled-components";

export const ProjectContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 6.75rem;
`

export const ProjectImage = styled.div`
  max-width: 77rem;
    
  img {
    border-radius: 0.6rem;
  }

  @media (max-width: 575.98px) {
    min-width: 100%;
  }
`

export const Details = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2.8rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`

export const Techs = styled.div`
  display: flex;
  gap: 0.8rem;
  max-width: 30rem;
  flex-wrap: wrap;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2rem;
    min-width: 7rem;
    padding: 1rem;

    font-size: var(--small-text);

    border: 1px solid;
    border-radius: 26px;
  }

  @media (max-width: 768px) {
    justify-content: left;
    max-width: 100%;
    margin-bottom: 1.5rem;
  }
`

export const Text = styled.div`
  max-width: 35.5rem;
  line-height: 1.4rem;
  text-align: justify;

  @media (max-width: 768px) {
    font-size: var(--small-text);
    text-align: justify;
    max-width: 100%;
  }

  @media (max-width: 575.98px) {
    justify-content: flex-start;

    span {
      width: 6rem;
      font-size: 0.8rem;
    }
  }
`

export const NameAndLink = styled.div`
  display: flex;
  justify-content:space-between;
  margin-top: 2rem;
  width: 100%;

  h3 {
    font-size: var(--subtitle);
    font-weight: 500;

    @media (max-width: 768px) {
      font-size: var(--small-subtitle);
    }
  }

  a {
    color: var(--blue);
    font-size: 1.2rem;
  }
`