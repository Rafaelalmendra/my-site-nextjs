import Head from 'next/head';

import ProjectCard from '../../components/Projects/ProjectCard';
import Footer from '../../components/Projects/Footer';

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
        <meta 
          name="description" 
          content="Conheça alguns dos meus projetos."
        />
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

      <div className="margins section"data-aos="zoom-in">
        <ProjectCard />
      </div>

      <div className="divider"></div>

      <footer className="margins">
        <Footer />
      </footer>
    </Container>
  )
};