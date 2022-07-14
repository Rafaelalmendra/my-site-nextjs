import { motion } from "framer-motion";

//styles
import * as S from "./styles";

export const OpenIcon = ({ ...props }) => (
  <S.Open {...props}>
    <i className="bi bi-list"></i>
  </S.Open>
);

export const CloseIcon = ({ ...props }) => (
  <S.Close {...props}>
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
