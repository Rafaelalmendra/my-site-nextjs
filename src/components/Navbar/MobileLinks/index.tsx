import { motion } from "framer-motion";

//components
import { Li } from "../Li";
import { LiSocial } from "../LiSocial";

//styles
import * as S from "./styles";

interface MobileLinksProps {
  closeMenu?: () => void;
}

export const MobileLinks = ({ closeMenu }: MobileLinksProps) => {
  return (
    <S.Container>
      <motion.div
        initial={{ y: -1000, opacity: 0.4 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          stiffness: 200,
        }}
      >
        <S.UlLinks>
          <Li onClick={() => closeMenu()} />

          <LiSocial
            className=""
            url="https://www.linkedin.com/in/rafaelalmendraa/"
            icon="bi bi-linkedin"
            style={{ fontSize: "2rem" }}
          />

          <LiSocial
            className=""
            url="https://github.com/Rafaelalmendra"
            icon="bi bi-github"
            style={{ fontSize: "2rem" }}
          />
        </S.UlLinks>
      </motion.div>
    </S.Container>
  );
};
