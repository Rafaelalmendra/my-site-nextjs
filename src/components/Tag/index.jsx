import { TagContainer } from "./styles";

const Tag = ({ text, color }) => {
  return (
    <TagContainer color={color}>
      <span>{text}</span>
    </TagContainer>
  );
};

export default Tag;
