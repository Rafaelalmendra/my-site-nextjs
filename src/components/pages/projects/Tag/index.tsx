import * as S from "./styles";

interface TagProps {
  text: string;
  color: string;
}

export const Tag = ({ text, color }: TagProps) => (
  <S.TagContainer color={color}>
    <span>{text}</span>
  </S.TagContainer>
);
