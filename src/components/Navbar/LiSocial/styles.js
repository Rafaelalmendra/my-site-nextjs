import styled from "styled-components";

export const Container = styled.div`
  li > a > i {
    ${(props) =>
      props.active && {
        color: "var(--blue)",
      }}

    transition: color ease-in-out 0.2s;

    &:hover {
      color: var(--blue);
    }
  }
`;
