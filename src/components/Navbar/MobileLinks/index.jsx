import { motion } from "framer-motion";
import Li from "../Li";
import LiSocial from "../LiSocial";
import Button from "@/components/Button";
import { Container, UlLinks } from "./style";

const MobileLinks = ({ closeMenu }) => {
  return (
    <Container>
      <motion.div
        initial={{ y: -1000, opacity: 0.4 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          stiffness: 200,
        }}
      >
        <UlLinks>
          <Li onClick={() => closeMenu()} url="/" name="Home" />
          <Li onClick={() => closeMenu()} url="/Projects" name="Projetos" />
          <Li onClick={() => closeMenu()} url="/Blog" name="Blog" />
          <Li
            onClick={() => closeMenu()}
            url="/Contact"
            name={<Button>Contato</Button>}
          />
          <LiSocial
            className=""
            url="https://www.linkedin.com/in/rafaelalmendradev/"
            icon="bi bi-linkedin"
            style={{ fontSize: "2rem" }}
          />
          <LiSocial
            className=""
            url="https://github.com/Rafaelalmendra"
            icon="bi bi-github"
            style={{ fontSize: "2rem" }}
          />
        </UlLinks>
      </motion.div>
    </Container>
  );
};

export default MobileLinks;
