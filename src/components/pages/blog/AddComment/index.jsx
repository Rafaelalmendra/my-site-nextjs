import { useTranslation } from "next-i18next";
import { useForm } from "react-hook-form";

// components
import { Modal } from "components";

// styles
import * as S from "./styles";

export const AddComment = ({ isOpen, handleClose }) => {
  const { t } = useTranslation();
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {};

  return (
    <Modal
      title="Adicionar Comentário"
      isOpen={isOpen}
      handleClose={handleClose}
      handleConfirm={handleSubmit(onSubmit)}
    >
      <S.Content>
        <S.Field>
          <label htmlFor="name">{t("yourName")}</label>
          <input
            id="name"
            type="text"
            {...register("name", {
              required: "O nome é obrigatório",
              minLength: {
                value: 2,
                message: "Mínimo de 2 caracteres",
              },
            })}
          />
          {errors.name && <span>{errors.name?.message}</span>}
        </S.Field>

        <S.Field>
          <label htmlFor="name">{t("comment")}</label>
          <textarea
            id="message"
            {...register("comment", {
              required: "O comentário é obrigatório",
              minLength: {
                value: 2,
                message: "Mínimo de 2 caracteres",
              },
            })}
          />
          {errors.name && <span>{errors.comment?.message}</span>}
        </S.Field>
      </S.Content>
    </Modal>
  );
};
