import Image from 'next/image';
import Head from 'next/head';
import { motion } from 'framer-motion';

import { 
  Container,
  ContactContainer,
  FormContainer,
  ContainerForm,
  VectorTwo,
  VectorOne
} from '../../styles/contact';

export default function Contact() {
  return (
    <Container>
      <Head>
        <title>Contato | Rafael Almendra</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta 
          name="description" 
          content="Entre em contato comigo através do formulário."
        />
      </Head>
      <ContactContainer className="margins">
        <div data-aos="zoom-in">
          <FormContainer>
            <form action="https://formsubmit.co/rafaelalmendra28@gmail.com" method="POST">
              <input type="hidden" name="_next" value="https://rafaelalmendra.com/" />
                <p>Entre em contato comigo</p>
                <ContainerForm>
                  <input type="hidden" name="form-name" value="form-contact"/>
                  <label>
                    Nome
                    <input 
                      type="text" 
                      name="name" 
                      placeholder="Qual seu nome?" 
                      required 
                    />
                  </label>
                  <label>
                    E-mail
                    <input 
                      type="email" 
                      name="email" 
                      placeholder="Insira um e-mail para contato" 
                      required 
                    />
                  </label>
                  <label>
                    Telefone (opcional)
                    <input 
                      type="number" 
                      name="phone" 
                      placeholder="Insira um número para contato" 
                    />
                  </label>
                  <label>
                    Mensagem (opcional)
                    <textarea 
                      name="message" 
                      type="text" 
                      placeholder="Escreva sua mensagem" 
                    />
                  </label>
                  <button 
                    className="contact-button" 
                    type="submit"
                  >
                    Enviar
                  </button>
                </ContainerForm>
              </form>
            </FormContainer>
        </div>
      </ContactContainer>

      <VectorTwo>
        <motion.div
          className="vector-one-contact"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 180,
            damping: 40,
            delay: 0.7
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
          className="vector-two-contact"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 180,
            damping: 40,
            delay: 0.5
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
    </Container>
  )
};