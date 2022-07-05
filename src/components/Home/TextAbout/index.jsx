import Link from "next/link";
import Button from "../../Button";
import {
  Container,
  CurriculumLink,
  InfosText,
  InfosTextLink,
  InfosContainer,
} from "./styles";

const TextAbout = () => (
  <Container data-aos="zoom-in">
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
  </Container>
);

export default TextAbout;
