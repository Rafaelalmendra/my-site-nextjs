import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 70vh;

  .bi-caret-right-fill {
    color: #FFF;
  }
`

export const ContainerAbout = styled.div`
  display: flex;
  gap: 15.875rem;

  @media (max-width: 1366px) {
    gap: 0;
  }

  @media (max-width: 767.98px) {
    flex-direction: column;
  }
`

export const TextAbout = styled.div`
  h2 {
    font-size: var(--title);
    font-weight: 600;
    margin-bottom: 1.7rem;
  }

  h3 {
    font-size: var(--subtitle);
    font-weight: 400;
    margin-bottom: 0.9rem;
  }

  p {
    font-size: var(--text);
    opacity: 0.8;
    font-weight: 300;
    max-width: 36rem;
    line-height: 1.6rem;
    margin-bottom: 1.6rem;
  }

  @media (max-width: 767.98px) {
    text-align: center;
    order: 1;

    p {
      max-width: 25rem;
    }

    button {
      margin-bottom: 4rem;
    }
  }

  @media (max-width: 575.98px) { 
    h2 {
      font-size: var(--small-title);
    }
    
    h3 {
      font-size: var(--small-subtitle);
    }

    p {
      font-size: var(--small-text);
      line-height: 1.4rem;
    }
  }
`

export const CurriculumLink = styled.div`
  margin-bottom: 2.938rem;
  font-weight: 300;
  text-decoration: underline;
  
  a {
    transition: color 0.2s ease-in-out;

    &:hover {
      color: var(--blue);
    }
  }
`

export const ImageAbout = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
`

export const ImageProfile = styled.div`
  position: relative;
  z-index: 1;

  @media (max-width: 767.98px) {
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
    max-width: 230px;
  }
`

export const ReactIcon = styled.div`
  position: relative;
  min-width: 8rem;
  z-index: 2;

  left: 4.8rem;
  transform: translateY(0);
  animation: float 3s ease-in-out infinite;

  @media (max-width: 767.98px) {
    display: none;
  }
`

export const ElementLine = styled.div`
  position: relative;
  left: -30rem;

  @media (max-width: 767.98px) {
    display: none;
  }
`