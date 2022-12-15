import { ClipLoader } from "react-spinners";

//styles
import * as S from "./styles";

interface ButtonProps {
  children: React.ReactNode;
  loading?: boolean;
  disabled?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
  width?: string;
  fontSize?: string;
  className?: string;
  backgroundColor?: string;
}

export const Button = ({
  children,
  loading,
  width,
  fontSize,
  disabled,
  className,
  backgroundColor,
  type = "button",
}: ButtonProps) => {
  return (
    <S.ButtonContainer
      type={type}
      width={width}
      fontSize={fontSize}
      disabled={disabled}
      className={className}
      backgroundColor={backgroundColor}
    >
      {loading && (
        <ClipLoader
          size={24}
          loading={loading}
          color="var(--white)"
          className="loading-spinner"
        />
      )}
      {children}
    </S.ButtonContainer>
  );
};
