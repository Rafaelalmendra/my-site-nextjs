import { motion } from "framer-motion";

// components
import { Links } from "../Links";

// styles
import * as S from "./styles";

// icons
import { X } from "phosphor-react";

interface MobileLinksProps {
  closeMenu: () => void;
}

export const MobileLinks = ({ closeMenu }: MobileLinksProps) => {
  return (
    <S.Container>
      <motion.div
        className="mobile-links"
        initial={{ y: -400, opacity: 0.4 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          duration: 0.5,
        }}
      >
        <S.Close onClick={closeMenu}>
          <X size={28} />
        </S.Close>

        <Links onClick={closeMenu} />
      </motion.div>
    </S.Container>
  );
};
