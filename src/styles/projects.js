import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
export const TitleProjects = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 10rem;
  h2 {
    font-size: var(--title);
    font-weight: 600;
    @media (max-width: 768px) {
      font-size: var(--small-title);
      font-weight: 600;
    }
  }
`;
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
`;
export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: linear-gradient(
    270deg,
    var(--blue) 0%,
    rgba(204, 244, 230, 0.34) 100%
  );
`;
