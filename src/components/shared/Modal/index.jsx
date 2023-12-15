import { useTranslation } from "next-i18next";

// components
import { Button } from "../Button";

// styles
import * as S from "./styles";

// icons
import { X } from "phosphor-react";

export const Modal = ({
  title,
  cancelButtonText,
  confirmButtonText,
  isOpen,
  children,
  handleClose,
  handleConfirm,
}) => {
  const { t } = useTranslation();

  return (
    <>
      <S.Modal isOpen={isOpen}>
        <S.Header>
          {title && <p>{title}</p>}
          {!title && <div />}

          <X size={28} onClick={handleClose} />
        </S.Header>

        <S.Content>{children}</S.Content>

        <S.Footer>
          <Button onClick={handleClose} variant="secondary" fontSize="18px">
            {cancelButtonText ? cancelButtonText : t("cancel")}
          </Button>

          <Button onClick={handleConfirm} fontSize="18px">
            {confirmButtonText ? confirmButtonText : t("confirm")}
          </Button>
        </S.Footer>
      </S.Modal>

      <S.StyledOverlay onClick={handleClose} isOpen={isOpen} />
    </>
  );
};
