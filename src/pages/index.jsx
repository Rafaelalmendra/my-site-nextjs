import Link from "next/link";
import Image from "next/image";

//components
import { Layout } from "src/components/Layout";
import { Button } from "src/components/Button";
import { HeadSeo } from "src/components/HeadSeo";

//styles
import * as S from "styles/home";

const Home = () => (
  <Layout>
    <S.Container>
      <HeadSeo
        title="Home | Rafael Almendra"
        content="Meu nome é Rafael, sou desenvolvedor Front-end apaixonado por tecnologia, programação e Design. Gosto de resolver problemas e ser desafiado. Sempre aberto a novos aprendizados e pronto para enfrentar mudanças."
      />

      <S.TextAbout data-aos="zoom-in">
        <h2>Sobre mim</h2>
        <h3>Rafael de Sousa Almendra</h3>
        <p>
          Sou desenvolvedor Front-end apaixonado por tecnologia, programação e
          design.
        </p>

        <S.InfosContainer>
          {/* <S.InfosTextLink>
            <i className="bi bi-building" />
            <a href="https://liqi.com.br" target="_blank" rel="noreferrer">
              <span></span>
            </a>
          </S.InfosTextLink> */}

          <S.InfosText>
            <i className="bi bi-envelope" />
            <span>rafaelalmendra28@gmail.com</span>
          </S.InfosText>

          <S.CurriculumLink>
            <a
              href="https://drive.google.com/file/d/1Pt7ngkyQ-U-3nKnL0y1A2YEYDpXalyxq/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Acessar currículo
            </a>
          </S.CurriculumLink>
        </S.InfosContainer>

        <Link href="/Projects">
          <a>
            <Button>
              Projetos <i className="bi bi-caret-right-fill" />
            </Button>
          </a>
        </Link>
      </S.TextAbout>

      <S.ImageAbout>
        <S.ReactIcon data-aos="zoom-in">
          <Image
            src={"/images/react.svg"}
            alt="Icone do Reactjs"
            width={136}
            height={136}
          />
        </S.ReactIcon>

        <S.ImageProfile>
          <Image
            layout="fill"
            data-aos="zoom-in"
            src={"/images/profile.png"}
            alt="Foto de perfil Rafael de Sousa Almendra"
          />
        </S.ImageProfile>
      </S.ImageAbout>
    </S.Container>
  </Layout>
);

export default Home;
