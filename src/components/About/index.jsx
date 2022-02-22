import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

import {
  Container,
  ContainerAbout,
  TextAbout,
  CurriculumLink,
  ImageAbout,
  ReactIcon,
  ImageProfile,
  ElementLine
} from './style'

export default function About() {
  return (
    <Container>
      <ContainerAbout className="margins">
        <TextAbout data-aos="zoom-in">
          <h2>Quem sou</h2>
          <h3>Rafael de Sousa Almendra</h3>
          <p>
            Sou desenvolvedor Front-end apaixonado por tecnologia, programação e
            design.
          </p>
          <CurriculumLink>
            <a 
              href="https://drive.google.com/file/d/1Pt7ngkyQ-U-3nKnL0y1A2YEYDpXalyxq/view?usp=sharing"
              target="_blank"
              rel='noopener noreferrer'
            >
              Acessar currículo
            </a>
          </CurriculumLink>
          
          <Link href='/Projects' style={{ textDecoration: 'none' }}>
            <a>
              <button className="global-button" >
                Projetos <i className="bi bi-caret-right-fill"></i>
              </button>
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
      </ContainerAbout>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 50,
          damping: 20,
        }}
      >
        <ElementLine>
          <Image 
            src={"/images/element-line.svg"}
            alt="Elemento de linha"
            width={801}
            height={200}
          />
        </ElementLine>
      </motion.div>
    </Container>
  )
}