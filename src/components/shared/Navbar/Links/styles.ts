import styled from "styled-components";

export const Container = styled.div`
  ul {
    display: flex;
    align-items: center;
    gap: 2rem;

    @media (max-width: 850px) {
      flex-direction: column;
      gap: 1.5rem;
    }
  }
`;

export const Li = styled.li<{ active?: boolean }>`
  font-size: 1rem;
  text-transform: uppercase;

  @media (max-width: 850px) {
    font-size: 1.375rem;
  }

  a {
    color: var(--grey);
    transition: color ease-in-out 0.2s;

    &:hover {
      color: ${(props) => props.theme.text};
    }
  }

  ${(props) =>
    props.active && {
      a: {
        color: props.theme.text,
        fontWeight: "500",
      },
    }}
`;
