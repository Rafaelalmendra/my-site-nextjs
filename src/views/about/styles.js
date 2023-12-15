import styled from "styled-components";

export const Container = styled.div`
  min-height: calc(100vh - 120px);

  display: flex;
  flex-direction: column;
  padding-top: 3.6rem;

  @media (max-width: 850px) {
    flex-direction: column;
    justify-content: center;
    padding: 1.5rem 0;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 850px) {
    flex-direction: column;
    padding-top: 0;
  }
`;

export const TextContainer = styled.div`
  width: 100%;

  @media (max-width: 850px) {
    order: 1;
  }

  h1 {
    font-weight: 600;
    font-size: 2.375rem;
    margin-bottom: 1.5rem;

    @media (max-width: 850px) {
      font-size: 2rem;
      margin-bottom: 0.25rem;
    }
  }

  p {
    font-size: 1rem;
    max-width: 80%;
    color: var(--grey);
    line-height: 1.8rem;

    @media (max-width: 850px) {
      max-width: 100%;
      line-height: 1.4rem;
      font-size: 0.875rem;
    }
  }

  .my-stacks {
    margin-top: 1rem;
  }
`;

export const TechList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
`;

export const ImageContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 850px) {
    width: 100%;
    justify-content: flex-start;
    margin-bottom: 1rem;
  }

  .profile {
    position: relative;
    width: 338px;
    height: 412px;

    @media (max-width: 850px) {
      width: 180px;
      height: 200px;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 4px;
    }
  }
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: var(--dark-grey);
  margin: 1.375rem 0;
`;

export const CareerContainer = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    font-weight: 500;
    font-size: 1.75rem;

    margin-bottom: 1.75rem;

    @media (max-width: 850px) {
      margin-bottom: 0.25rem;
    }
  }
`;

export const CareerList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.75rem;

  @media (max-width: 850px) {
    gap: 1rem;
  }
`;
