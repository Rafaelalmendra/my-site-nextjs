import Head from "next/head";
import Container from "../styles/home";
import TextAbout from "../components/TextAbout";
import ImageAbout from "../components/ImageAbout";

const Home = () => (
  <Container className="margins">
    <Head>
      <title>Home | Rafael Almendra</title>
      <meta
        name="description"
        content="Meu nome é Rafael, sou desenvolvedor Front-end."
      />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <TextAbout />
    <ImageAbout />
  </Container>
);

export default Home;
