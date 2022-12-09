import { useState } from "react";
import { useTranslation } from "next-i18next";
import axios from "axios";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";

//components
import { Button } from "components";

//styles
import * as S from "./styles";

interface FormDataProps {
  name: string;
  email: string;
  message: string;
}

export const Form = () => {
  const { t } = useTranslation();
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataProps>();

  const [loading, setLoading] = useState(false);

  const onSubmit: SubmitHandler<FormDataProps> = async (data) => {
    setLoading(true);

    try {
      await axios.post(
        "https://formsubmit.co/ajax/rafaelalmendra28@gmail.com",
        data
      );
      toast.success(t("sucessMessage"));
      reset();
    } catch (error) {
      console.error(error);
      toast.error(error?.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <S.FormContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="hidden" name="form-name" value="form-contact" />

        <S.TwoFields>
          <S.Field>
            <label htmlFor="name">{t("name")} *</label>
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
            {errors?.name && (
              <span className="error">{errors?.name?.message}</span>
            )}
          </S.Field>

          <S.Field>
            <label htmlFor="email">{t("emailAddress")} *</label>
            <input
              id="email"
              type="email"
              {...register("email", {
                required: "O e-mail é obrigatório",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "E-mail inválido",
                },
              })}
            />
            {errors?.email && (
              <span className="error">{errors?.email?.message}</span>
            )}
          </S.Field>
        </S.TwoFields>

        <S.Field style={{ marginTop: "2.0625rem", marginBottom: "2.0625rem" }}>
          <label htmlFor="message">{t("typeMessage")}</label>
          <textarea
            id="message"
            {...register("message", {
              required: "A mensagem é obrigatória",
              minLength: {
                value: 2,
                message: "Mínimo de 2 caracteres",
              },
            })}
          />
          {errors?.message && (
            <span className="error">{errors?.message?.message}</span>
          )}
        </S.Field>

        <Button type="submit" loading={loading}>
          {loading ? t("sending") : t("submit")}
        </Button>
      </form>
    </S.FormContainer>
  );
};
