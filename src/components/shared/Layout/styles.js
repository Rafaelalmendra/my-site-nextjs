import styled from "styled-components";

export const Container = styled.section`
  min-height: 100vh;
  max-width: 100vw;
  overflow: hidden;

  padding: 6rem 2.5rem 2.5rem 2.5rem;

  @media (max-width: 850px) {
    padding: 6rem 1.25rem 1.25rem;
  }
`;

export const Content = styled.div`
  width: ${(props) => (props.blogPost ? "768px" : "1096px")};
  max-width: 100%;

  margin: 0 auto;

  padding-top: ${(props) => (props.paddingTop ? "4.65rem" : 0)};

  @media (max-width: 850px) {
    width: 100%;
    padding-top: ${(props) => (props.paddingTop ? "2.2rem" : 0)};
  }
`;
