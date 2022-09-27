import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;

  @media (max-width: 900px) {
    justify-content: center;
  }

  .title {
    width: 150px;
    height: 36px;

    @media (max-width: 850px) {
      width: 90px;
      height: 20px;
    }
  }

  .links-container {
    @media (max-width: 900px) {
      display: none;
    }
  }

  .links {
    width: 102px;
    height: 26px;
    margin-left: 1.875rem;
  }
`;
