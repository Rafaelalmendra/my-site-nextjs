import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  max-width: 100vw;
  overflow: hidden;

  padding: 6rem 40px 40px 40px;

  @media (max-width: 850px) {
    padding: 6rem 20px 20px;
  }
`;

export const Content = styled.div`
  width: ${(props) => (props.blogPost ? "768px" : "1096px")};
  max-width: 100%;

  margin: 0 auto;

  padding-top: ${(props) => (props.paddingTop ? "4rem" : 0)};

  @media (max-width: 850px) {
    width: 100%;
    padding-top: ${(props) => (props.paddingTop ? "2.2rem" : 0)};
  }
`;
