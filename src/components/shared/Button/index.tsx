import { ClipLoader } from "react-spinners";

//styles
import * as S from "./styles";

interface ButtonProps {
  loading?: boolean;
  children: React.ReactNode;
  width?: string;
  fontSize?: string;
  mobileFontSize?: string;
  backgroundColor?: string;
  type?: "button" | "submit" | "reset" | undefined;
}

export const Button = ({
  loading,
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
      {loading && (
        <ClipLoader color="var(--white)" loading={loading} size={22} />
      )}
      {children}
    </S.ButtonContainer>
  );
};
