// styles
import * as S from "./styles";

export const Tag = ({ text, color }) => (
  <S.TagContainer color={color}>
    <span>{text}</span>
  </S.TagContainer>
);
