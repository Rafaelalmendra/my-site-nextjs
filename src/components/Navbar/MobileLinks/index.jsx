import { motion } from "framer-motion";

//components
import Li from "../Li";
import LiSocial from "../LiSocial";

//styles
import { Container, UlLinks } from "./styles";

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
          <Li onClick={() => closeMenu()} />

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
