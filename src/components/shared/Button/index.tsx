import { ClipLoader } from "react-spinners";

//styles
import * as S from "./styles";

interface ButtonProps {
  width?: string;
  fontSize?: string;
  disabled?: boolean;
  mobileFontSize?: string;
  backgroundColor?: string;
  loading?: boolean;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
}

export const Button = ({
  children,
  loading,
  width,
  fontSize,
  disabled,
  backgroundColor,
  mobileFontSize,
  type = "button",
}: ButtonProps) => {
  return (
    <S.ButtonContainer
      type={type}
      width={width}
      fontSize={fontSize}
      disabled={disabled}
      backgroundColor={backgroundColor}
      mobileFontSize={mobileFontSize}
    >
      {loading && (
        <ClipLoader color="var(--white)" loading={loading} size={22} />
      )}
      {children}
    </S.ButtonContainer>
  );
};
