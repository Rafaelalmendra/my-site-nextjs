import { motion } from "framer-motion";

//styles
import { Open, Close } from "./styles";

const OpenIcon = ({ ...props }) => (
  <Open {...props}>
    <i className="bi bi-list"></i>
  </Open>
);

const CloseIcon = ({ ...props }) => (
  <Close {...props}>
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
  </Close>
);

export { OpenIcon, CloseIcon };
