import styled from "styled-components";

export const AuthorAndDate = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 3rem;
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
`;
export const AuthorImage = styled.div`
  width: 3.125rem;
  height: 3.125rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.875rem 0 1rem 0;
  clip-path: circle();
`;
