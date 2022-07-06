import Link from "next/link";
import Image from "next/image";

//components
import Layout from "src/components/Layout";
import Button from "src/components/Button";
import HeadSeo from "src/components/HeadSeo";

//styles
import {
  Container,
  TextAbout,
  InfosText,
  ReactIcon,
  ImageAbout,
  ImageProfile,
  InfosTextLink,
  InfosContainer,
  CurriculumLink,
} from "styles/home";

const Home = () => (
  <Layout>
    <Container>
      <HeadSeo
        title="Home | Rafael Almendra"
        content="Meu nome é Rafael, sou desenvolvedor Front-end apaixonado por tecnologia, programação e Design. Gosto de resolver problemas e ser desafiado. Sempre aberto a novos aprendizados e pronto para enfrentar mudanças."
      />

      <TextAbout data-aos="zoom-in">
        <h2>Sobre mim</h2>
        <h3>Rafael de Sousa Almendra</h3>
        <p>
          Sou desenvolvedor Front-end apaixonado por tecnologia, programação e
          design.
        </p>

        <InfosContainer>
          <InfosTextLink>
            <i className="bi bi-building" />
            <a href="https://liqi.com.br" target="_blank" rel="noreferrer">
              <span>Liqi Digital Assets</span>
            </a>
          </InfosTextLink>

          <InfosText>
            <i className="bi bi-envelope" />
            <span>rafaelalmendra28@gmail.com</span>
          </InfosText>

          <CurriculumLink>
            <a
              href="https://drive.google.com/file/d/1Pt7ngkyQ-U-3nKnL0y1A2YEYDpXalyxq/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Acessar currículo
            </a>
          </CurriculumLink>
        </InfosContainer>

        <Link href="/Projects">
          <a>
            <Button>
              Projetos <i className="bi bi-caret-right-fill" />
            </Button>
          </a>
        </Link>
      </TextAbout>

      <ImageAbout>
        <ReactIcon data-aos="zoom-in">
          <Image
            src={"/images/react.svg"}
            alt="Icone do Reactjs"
            width={136}
            height={136}
          />
        </ReactIcon>

        <ImageProfile>
          <Image
            data-aos="zoom-in"
            src={"/images/profile.svg"}
            alt="Foto de perfil Rafael de Sousa Almendra"
            width={322}
            height={342}
          />
        </ImageProfile>
      </ImageAbout>
    </Container>
  </Layout>
);

export default Home;
