import styled from "styled-components";

export const Container = styled.div`
  li > a > i {
    color: ${(props) => (props.active ? "var(--blue)" : props.theme.text)};
    transition: color ease-in-out 0.2s;

    &:hover {
      color: var(--blue);
    }
  }
`;
