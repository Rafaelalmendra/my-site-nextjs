import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

export const TitleProjects = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;

  margin-top: 10rem;

  h2 {
    font-size: var(--title);
    font-weight: 600;

    @media (max-width: 768px) {
      font-size: var(--small-title);
      font-weight: 600;
    }
  }
`

export const ProjectsContainer = styled.div`
  ul {
    display: flex;
    gap: 1.5rem;
    
    cursor: pointer;
    
    li a {
      transition: color ease 0.2s;
      
      &:hover {
        color: var(--blue);
      }
    }

    @media (max-width: 768px) {
      flex-wrap: wrap;
      flex-direction: column;
      gap: 0.8rem;
    }
  }
`

export const ProjectContainer = styled.div`

`