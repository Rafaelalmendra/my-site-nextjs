import { useTranslation } from "next-i18next";
import { useForm, SubmitHandler } from "react-hook-form";

// components
import { Modal } from "components";

// styles
import * as S from "./styles";
import { writeToDatabase } from "utils/database";

interface AddCommentProps {
  slug: string;
  isOpen: boolean;
  handleClose: () => void;
}

interface FormDataProps {
  name: string;
  comment: string;
}

export const AddComment = ({ slug, isOpen, handleClose }: AddCommentProps) => {
  const { t } = useTranslation();
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataProps>();

  const onSubmit: SubmitHandler<FormDataProps> = async (data) => {
    await writeToDatabase({
      data,
      path: `comments/${slug}`,
    });

    reset();
    handleClose();
  };

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
          <label htmlFor="message">{t("comment")}</label>
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
