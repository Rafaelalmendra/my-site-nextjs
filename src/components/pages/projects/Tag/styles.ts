import styled from "styled-components";

export const TagContainer = styled.div`
  padding: 4px 24px;

  border-radius: 4px;
  background: ${(props) => (props.color ? props.color : "var(--blue")};
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.06);

  span {
    font-size: 0.875rem;
    color: var(--white);
    font-weight: 500;

    @media (max-width: 850px) {
      font-size: 0.875rem;
    }
  }
`;
