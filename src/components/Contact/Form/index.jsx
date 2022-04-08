import { ContainerForm, FormContainer, ContactButton } from "./style";

const Form = () => (
  <FormContainer data-aos="zoom-in" className="margins">
    <form
      action="https://formsubmit.co/rafaelalmendra28@gmail.com"
      method="POST"
    >
      <input type="hidden" name="_next" value="https://rafaelalmendra.com/" />
      <p>Entre em contato comigo</p>
      <ContainerForm>
        <input type="hidden" name="form-name" value="form-contact" />
        <label>
          Nome
          <input
            type="text"
            name="name"
            placeholder="Qual seu nome?"
            required
          />
        </label>
        <label>
          E-mail
          <input
            type="email"
            name="email"
            placeholder="Insira um e-mail para contato"
            required
          />
        </label>
        <label>
          Telefone (opcional)
          <input
            type="number"
            name="phone"
            placeholder="Insira um número para contato"
          />
        </label>
        <label>
          Mensagem (opcional)
          <textarea
            name="message"
            type="text"
            placeholder="Escreva sua mensagem"
          />
        </label>
        <ContactButton type="submit">Enviar</ContactButton>
      </ContainerForm>
    </form>
  </FormContainer>
);

export default Form;
