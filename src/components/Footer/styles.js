import styled from "styled-components";

export const Container = styled.div`
  min-height: 10vh;
  bottom: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  span {
    font-size: 1rem;
    font-weight: 300;
  }

  .bi-heart-fill {
    color: var(--blue);
  }
`;
