import styled from "styled-components";

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: linear-gradient(
    270deg,
    var(--blue) 0%,
    rgba(204, 244, 230, 0.34) 100%
  );
`;

const DividerTwo = styled.div`
  width: 100%;
  height: 1px;
  margin: 2rem 0;
  background: linear-gradient(
    270deg,
    var(--blue) 0%,
    rgba(204, 244, 230, 0.34) 100%
  );
  transform: matrix(-1, 0, 0, 1, 0, 0);
`;

export { Divider, DividerTwo };
