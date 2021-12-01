import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  min-height: 100vh;

  h1 {
    font-size: 2.8rem;
    font-weight: 500;
    margin-bottom: 1.765rem;
    margin-left: 0.875rem;
  }

  h2 {
    font-size: 1.8rem;
    font-weight: 500;
    margin-bottom: 1.765rem;
    margin-left: 0.875rem;
  }

  p {
    font-size: 1.1rem;
    font-weight: 300;
    line-height: 2rem;
    text-align: justify;
    width: 92%;
    margin-left: 0.475rem;
  }

  img {
    margin-left: 0.475rem;
  }

  .image-blog {
    margin-top: 1rem;
    margin-bottom: 1rem;
    border-radius: 8px;
  }
`

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-top: 10rem;
  
  .image {
    border-radius: 8px;
  }
`

export const Techs = styled.div`
  margin-top: 1.4rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-left: 0.875rem;

  span {
    width: 5.875rem;
    height: 1.688rem;
    margin-bottom: 2rem;

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
  width: 92%;
  margin-left: 0.875rem;


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
  width: 50px;
  height: 50px;
  margin-left: 0.875rem;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 0.875rem;
  margin-bottom: 3rem;

  clip-path: circle();
`