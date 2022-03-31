import Link from "next/link";
import { motion } from "framer-motion";
import { UlLinks, ButtonContact } from "./style";

const NavLinks = (props) => {
  return (
    <motion.div
      className="nav-links"
      initial={{ y: -1000, opacity: 0.4 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        stiffness: 200,
      }}
    >
      <UlLinks>
        <Link href="/" style={{ textDecoration: "none" }}>
          <a>
            <li onClick={() => props.isMenu && props.closeMenu()}>Home</li>
          </a>
        </Link>
        <Link href="/Projects" style={{ textDecoration: "none" }}>
          <a>
            <li onClick={() => props.isMenu && props.closeMenu()}>Projetos</li>
          </a>
        </Link>
        <Link href="/Blog" style={{ textDecoration: "none" }}>
          <a>
            <li onClick={() => props.isMenu && props.closeMenu()}>Blog</li>
          </a>
        </Link>
        <Link href="/Contact" style={{ textDecoration: "none" }}>
          <a>
            <ButtonContact onClick={() => props.isMenu && props.closeMenu()}>
              Contato
            </ButtonContact>
          </a>
        </Link>
        <li>
          <a
            href="https://www.linkedin.com/in/rafaelalmendradev/"
            target="_blank"
            rel="noopener noreferrer"
            className="link_mobile"
          >
            <i className="bi bi-linkedin"></i>
          </a>
        </li>

        <li>
          <a
            href="https://github.com/Rafaelalmendra"
            target="_blank"
            rel="noopener noreferrer"
            className="link_mobile"
          >
            <i className="bi bi-github"></i>
          </a>
        </li>
      </UlLinks>
    </motion.div>
  );
};

export default NavLinks;
