import { FormContainer, Field, TwoFields, Button } from "./styles";

const Form = () => (
  <FormContainer>
    <form
      action="https://formsubmit.co/rafaelalmendra28@gmail.com"
      method="POST"
    >
      <input type="hidden" name="_next" value="https://rafaelalmendra.com/" />
      <input type="hidden" name="form-name" value="form-contact" />

      <TwoFields>
        <Field>
          <label htmlFor="name">Nome *</label>
          <input type="text" name="name" id="name" required />
        </Field>

        <Field>
          <label htmlFor="email">Endereço de e-mail *</label>
          <input type="email" id="email" required />
        </Field>
      </TwoFields>

      <Field style={{ marginTop: "2.0625rem", marginBottom: "2.0625rem" }}>
        <label htmlFor="message">Digite sua mensagem...</label>
        <textarea id="message" name="message" />
      </Field>

      <Button type="submit">Enviar</Button>
    </form>
  </FormContainer>
);

export default Form;
