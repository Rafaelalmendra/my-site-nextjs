import styled from "styled-components";

const Container = styled.main`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .bi-caret-right-fill {
    color: var(--white);
  }
  @media (max-width: 767.98px) {
    flex-direction: column;
    margin: 2rem 0 2rem 0;
  }
`;

export default Container;
