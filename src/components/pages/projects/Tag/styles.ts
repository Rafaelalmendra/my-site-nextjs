import styled from "styled-components";

export const TagContainer = styled.div`
  padding: 0.5625rem 1.875rem;

  border-radius: 10px;
  background: ${(props) => (props.color ? props.color : "var(--blue")};
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.06);

  @media (max-width: 850px) {
    padding: 7px 24px;
  }

  span {
    font-size: 1rem;
    color: var(--white);
    font-weight: 500;

    @media (max-width: 850px) {
      font-size: 0.875rem;
    }
  }
`;
