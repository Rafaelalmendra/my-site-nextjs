import { motion } from "framer-motion";

//styles
import * as S from "./styles";

interface IconsProps {
  onClick: () => void;
}

const OpenIcon = ({ onClick }: IconsProps) => (
  <S.Open onClick={onClick}>
    <i className="bi bi-list"></i>
  </S.Open>
);

const CloseIcon = ({ onClick }: IconsProps) => (
  <S.Close onClick={onClick}>
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{
        type: "spring",
        stiffness: 120,
      }}
    >
      <i className="bi bi-x"></i>
    </motion.div>
  </S.Close>
);

export { OpenIcon, CloseIcon };
