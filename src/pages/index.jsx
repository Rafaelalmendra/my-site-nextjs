import Image from 'next/image'
import { motion } from 'framer-motion'

import About from '../components/About'
import { 
  Container, 
  Main, 
  Logo, 
  Title, 
  ButtonHome, 
  VectorOne, 
  VectorTwo 
} from '../styles/home'

export default function Home() {
  return (
    <>
      <Container>
        <Main>
          <Logo>
            <Image 
              data-aos="zoom-in"
              src="/images/logohome.svg"
              alt="Logo Principal Rafael Almendra"
              width={528}
              height={328}
            />
          </Logo>

          <Title data-aos="fade-up" data-aos-delay="200"> 
            <a href="#about">
              <ButtonHome>
                Sobre mim <i className="bi bi-caret-down-fill"></i>
              </ButtonHome>
            </a>
          </Title>

          <VectorTwo>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 180,
                damping: 40,
                delay: 0.6
              }}
            >
              <Image 
                src="/images/vector-new-1.png" 
                alt="Imagem de um vetor no fundo da tela"
                width={200}
                height={200}
              />
            </motion.div>
          </VectorTwo>

          <VectorOne>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 180,
                damping: 40,
                delay: 0.4
              }}
              >
              <Image 
                src="/images/vector-new-2.png" 
                alt="Imagem de outro vetor no fundo da tela"
                width={100}
                height={100}
                />
            </motion.div>
          </VectorOne>
        </Main>
      </Container>
      <section id="about">
        <About />
      </section>
    </>
  )
}