import Head from 'next/head';

import ProjectCard from './ProjectCard';
import Footer from './Footer';

import { 
  Container, 
  TitleProjects, 
  ProjectsContainer, 
} from '../../styles/projects';

export default function Projects() {
  return (
    <Container>
      <Head>
        <title>Projetos | Rafael Almendra</title>
      </Head>

      <TitleProjects className="margins" data-aos="fade-down">
        <h2>Projetos</h2>
        <ProjectsContainer>
          <ul>
            <li><a href="#letmeask">Letmeask</a> </li>
            <li><a href="#beautysalon">Beautysalon</a></li>
            <li><a href="#almendra-e-mota">Almendra e Mota</a> </li>
          </ul>
        </ProjectsContainer>
      </TitleProjects>

      <div className="margins section" id="letmeask" data-aos="zoom-in">
        <ProjectCard
          image="/images/letmeask.svg"
          alt="Mockup site de perguntas e respostas No site Rafael Almendra"
          spanOne="Reactjs"
          spanTwo="Sass"
          spanThree="Firebase"
          spanFour="Typescript"
          description="Letmeask é perfeito para criadores de conteúdo criarem salas de perguntas e respostas de uma forma muito organizada e democrática."
          name="Criação salas de Q&A ao-vivo"
          link="https://letmeask-efccf.web.app/"
        />
      </div>

      <div className="divider"></div>

      <div className="margins section" id="beautysalon" data-aos="zoom-in">
        <ProjectCard
          image="/images/beautysalon.svg"
          alt="Mockup salão de beleza Beautysalon no site Rafael Almendra"
          spanOne="Html5"
          spanTwo="Css3"
          spanThree="Javascript"
          spanFour="Netlify"
          description="Um site para um salão exclusivo em São Paulo, especializado em tratamentos naturais."
          name="Site para salão de beleza"
          link="https://beautysallon.netlify.app/"
        />
      </div>

      <div className="divider-two"></div>

      <div className="margins section" id="almendra-e-mota" data-aos="zoom-in">
        <ProjectCard
          image="/images/almendra-e-mota.svg"
          alt="Mockup sociedade de advogados Almendra e Mota no site Rafael Almendra"
          spanOne="Html5"
          spanTwo="Css3"
          spanThree="Javascript"
          spanFour="Netlify"
          description="Site de advocacia para a sociedade de advogados Almendra e Mota."
          name="Site para sociedade de advogados"
          link="https://almendraemota.com/"
        />
      </div>

      <div className="divider"></div>

      <footer className="margins">
        <Footer />
      </footer>
    </Container>
  )
};