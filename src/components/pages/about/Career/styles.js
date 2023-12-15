import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  .title {
    font-size: 1.375rem;
    font-weight: 500;
    margin-bottom: 0.25rem;

    @media (max-width: 850px) {
      font-size: 1.125rem;
    }
  }
`;

export const CompanyAndDate = styled.div`
  display: flex;
  align-items: center;
  gap: 0.375rem;

  a {
    text-decoration: underline;
    transition: color 0.2s ease-in-out;

    &:hover {
      color: var(--blue);
    }
  }

  span {
    font-size: 0.875rem;
    color: var(--grey);
  }
`;

export const Skills = styled.div`
  display: flex;
  align-items: center;
  margin-top: 4px;
  gap: 0.4rem;

  @media (max-width: 850px) {
    align-items: flex-start;
  }

  span {
    font-size: 0.875rem;
    color: var(--grey);
  }
`;
