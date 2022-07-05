//components
import HeadSeo from "src/components/HeadSeo";
import Form from "src/components/Contact/Form";

//styles
import { Container, FormContainer } from "styles/contact";

const Contact = () => (
  <Container className="margins">
    <HeadSeo
      title="Contato | Rafael Almendra"
      content="Entre em contato comigo através do formulário."
    />

    <FormContainer>
      <h1>Enviar uma mensagem</h1>
      <Form />
    </FormContainer>
  </Container>
);

export default Contact;
