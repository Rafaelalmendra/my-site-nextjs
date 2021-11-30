import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;
`

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2.275rem;
  margin-top: 6rem;

  h1 {
    font-size: 2.625rem;
    font-weight: 500;
    color: var(--blue);
  }

  input {
    width: 24rem;
    height: 3.375rem;
    padding-left: 1rem;
    margin-bottom: 4.875rem;
    
    font-size: 1rem;

    border: 1px solid var(--blue);
    border-radius: 4px;

  }
`

export const Post = styled.div`
  width: 339px;
  height: 419px;
  display: flex;
  flex-direction: column;
  padding-left: 2rem;
  padding-top: 2rem;
  background-size: cover;
  background-position: center;
  border-radius: 28px;

  p {
    font-size: 2.625rem;
    font-weight: 500;
    line-height: 3rem;
    margin-bottom: 10rem;
  }

  span {
    font-size: 1.425rem;

    strong {
      font-weight: 500;
    }
  }
`