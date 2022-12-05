//styles
import * as S from "./styles";

interface ButtonProps {
  children: React.ReactNode;
  width?: string;
  fontSize?: string;
  backgroundColor?: string;
  mobileFontSize?: string;
  type?: "button" | "submit" | "reset" | undefined;
}

export const Button = ({
  children,
  width,
  fontSize,
  type = "button",
  backgroundColor,
  mobileFontSize,
}: ButtonProps) => {
  return (
    <S.ButtonContainer
      type={type}
      width={width}
      fontSize={fontSize}
      backgroundColor={backgroundColor}
      mobileFontSize={mobileFontSize}
    >
      {children}
    </S.ButtonContainer>
  );
};
