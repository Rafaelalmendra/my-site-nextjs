import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  min-height: 100vh;

  .image {
    border-radius: 8px;
  }

  h1 {
    font-size: 2.8rem;
    font-weight: 500;
    margin-bottom: 1rem;
  }
`

export const Techs = styled.div`
  margin-top: 2.563rem;
  display: flex;
  align-items: center;
  gap: 2rem;

  span {
    width: 5.875rem;
    height: 1.688rem;
    margin-bottom: 0.688rem;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 0.775rem;
    font-weight: 500;
    text-transform: uppercase;

    border-radius: 132px;
  }
`

export const AuthorAndDate = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 96%;

  span {
    font-size: 1rem;
    font-weight: 400;

    &:last-child {
      font-size: 0.875rem;
    }

    strong {
      font-weight: 500;

    }
  }
`

export const AuthorImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0.875rem;
  width: 50px;
  height: 50px;
  clip-path: circle();
`