import Image from 'next/image';
import { motion } from 'framer-motion';

import { 
  Container,
  ContactContainer,
  FormContainer,
  ContainerForm,
  VectorTwo,
  VectorOne
} from './style';

export default function Contact() {
  return (
    <Container>
        <ContactContainer className="margins">
          <div data-aos="zoom-in">
            <FormContainer>
              <form 
                name="form-contact"
                method="POST"
                data-netlify="true"
                onSubmit="submit"
                netlify
              >
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
                  <input 
                    className="contact-button" 
                    type="submit"
                    value="Enviar"
                  />
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