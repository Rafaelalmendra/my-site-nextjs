//components
import HeadSeo from "src/components/HeadSeo";
import TextAbout from "src/components/Home/TextAbout";
import ImageAbout from "src/components/Home/ImageAbout";

//styles
import Container from "styles/home";

const Home = () => (
  <Container className="margins">
    <HeadSeo
      title="Home | Rafael Almendra"
      content="Meu nome é Rafael, sou desenvolvedor Front-end apaixonado por tecnologia, programação e Design. Gosto de resolver problemas e ser desafiado. Sempre aberto a novos aprendizados e pronto para enfrentar mudanças."
    />

    <TextAbout />

    <ImageAbout />
  </Container>
);

export default Home;
