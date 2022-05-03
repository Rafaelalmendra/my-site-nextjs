//components
import Form from "@/components/Contact/Form";
import HeadSeo from "@/components/HeadSeo";

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
