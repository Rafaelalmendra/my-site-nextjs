import styled from "styled-components";

const Container = styled.main`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .bi-caret-right-fill {
    color: var(--white);
  }

  @media (max-width: 850px) {
    flex-direction: column;
    justify-content: center;
    margin: 2rem 0 2rem 0;
  }
`;

export default Container;
