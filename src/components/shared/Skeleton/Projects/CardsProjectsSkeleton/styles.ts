import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  margin-bottom: 3rem;

  .card-image {
    width: 100%;
    height: 431px;
    border-radius: 0;

    @media (max-width: 994px) {
      height: 370px;
    }

    @media (max-width: 854px) {
      height: 300px;
    }

    @media (max-width: 640px) {
      height: 200px;
    }

    @media (max-width: 480px) {
      height: 148px;
    }
  }
`;

export const Infos = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  margin-top: 1.8rem;
  gap: 4rem;

  @media (max-width: 850px) {
    align-items: start;
    flex-direction: column;
    gap: 1.4rem;
  }

  .info-title {
    width: 160px;
    height: 34px;

    @media (max-width: 850px) {
      height: 24px;
    }
  }

  .info-text {
    width: 460px;
    height: 52px;

    @media (max-width: 850px) {
      max-width: 60%;
      height: 32px;
    }
  }
`;

export const Details = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  margin-top: 1.8rem;
  gap: 4rem;

  @media (max-width: 850px) {
    gap: 1rem;
  }

  .links {
    width: 2.1rem;
    height: 2.1rem;
    margin-left: 1rem;
  }
`;

export const TechsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  max-width: 30rem;

  @media (max-width: 850px) {
    max-width: 16rem;
  }

  .techs {
    width: 7rem;
    height: 2.1rem;
    margin: 0 1rem 1rem 0;

    border-radius: 1.625rem;

    @media (max-width: 850px) {
      min-width: 6rem;
      height: 1.875rem;
    }
  }
`;
