import Form from "@/components/Contact/Form";
import HeadSeo from "@/components/HeadSeo";
import Container from "styles/contact";

const Contact = () => (
  <Container>
    <HeadSeo
      title="Contato | Rafael Almendra"
      content="Entre em contato comigo através do formulário."
    />
    <Form />
  </Container>
);

export default Contact;
