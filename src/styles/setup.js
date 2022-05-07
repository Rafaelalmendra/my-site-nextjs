import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10rem;

  h1 {
    font-size:  2.4rem;
    font-weight: 700;
    text-transform: uppercase;
  }

  p {
    width: 48rem;
    text-align: center;
    margin-top: 1.5rem;
    line-height: 1.5rem;
    color: var(--grey);
  }
`

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;

  margin-top: 4.063rem;
`

export const Divider = styled.div`
  width: 2px;
  height: 649px;
  background: linear-gradient(
    90deg,
    var(--blue) 0%,
    rgba(204, 244, 230, 0.34) 100%
  );
`
