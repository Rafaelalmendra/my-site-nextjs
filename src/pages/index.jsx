//components
import ImageAbout from "@/components/Home/ImageAbout";
import TextAbout from "@/components/Home/TextAbout";
import HeadSeo from "@/components/HeadSeo";

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
