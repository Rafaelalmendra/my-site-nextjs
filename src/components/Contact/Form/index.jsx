//components
import { Button } from "src/components/Button";

//styles
import * as S from "./styles";

export const Form = () => (
  <S.FormContainer>
    <form
      action="https://formsubmit.co/rafaelalmendra28@gmail.com"
      method="POST"
    >
      <input type="hidden" name="_next" value="https://rafaelalmendra.com/" />
      <input type="hidden" name="form-name" value="form-contact" />

      <S.TwoFields>
        <S.Field>
          <label htmlFor="name">Nome *</label>
          <input type="text" name="name" id="name" required />
        </S.Field>

        <S.Field>
          <label htmlFor="email">Endereço de e-mail *</label>
          <input type="email" id="email" required />
        </S.Field>
      </S.TwoFields>

      <S.Field style={{ marginTop: "2.0625rem", marginBottom: "2.0625rem" }}>
        <label htmlFor="message">Digite sua mensagem...</label>
        <textarea id="message" name="message" />
      </S.Field>

      <Button type="submit">Enviar</Button>
    </form>
  </S.FormContainer>
);
