import { useContext, useState } from "react";
import { ThemeContext } from "styled-components";
import { motion } from "framer-motion";
import NavLinks from "./NavLinks";
import Switch from "react-switch";
import Image from "next/image";
import Link from "next/link";
import {
  Header,
  Nav,
  Logo,
  UlContainer,
  MenuMain,
  ButtonContact,
  NavigationMobile,
} from "./style";

const Navbar = ({ toggleTheme }) => {
  const { title } = useContext(ThemeContext);
  const [navbar, setnavbar] = useState(false);
  const [open, setOpen] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setnavbar(true);
    } else {
      setnavbar(false);
    }
  };
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", changeBackground);
  }
  const hamburguerIcon = (
    <div className="hamburguer">
      <i className="bi bi-list" onClick={() => setOpen(!open)}></i>
    </div>
  );
  const closeIcon = (
    <motion.div
      className="close"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{
        type: "spring",
        stiffness: 120,
      }}
    >
      <i
        className="bi bi-x"
        alt="Icone de fechar menu"
        onClick={() => setOpen(!open)}
      ></i>
    </motion.div>
  );
  const closeMenu = () => setOpen(false);

  return (
    <Header className={navbar ? "active" : ""}>
      <Nav className="margins-nav">
        <Link href="/" style={{ textDecoration: "none" }}>
          <a>
            <Logo>
              <Image
                src="/images/logo.svg"
                alt="Logo Rafael Almendra"
                width={46}
                height={46}
              />
            </Logo>
          </a>
        </Link>
        <MenuMain>
          <UlContainer>
            <li className="desktop black-font">
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li className="desktop">
              <Link href="/Projects">
                <a>Projetos</a>
              </Link>
            </li>
            <li className="desktop">
              <Link href="/Blog">
                <a>Blog</a>
              </Link>
            </li>
            <li className="desktop">
              <Link href="/Contact">
                <a>
                  <ButtonContact>Contato</ButtonContact>
                </a>
              </Link>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/rafaelalmendradev/"
                target="_blank"
                rel="noopener noreferrer"
                className="link"
              >
                <i className="bi bi-linkedin"></i>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Rafaelalmendra"
                target="_blank"
                rel="noopener noreferrer"
                className="link"
              >
                <i className="bi bi-github"></i>
              </a>
            </li>
            <Switch
              onChange={toggleTheme}
              checked={title === "dark"}
              checkedIcon={false}
              uncheckedIcon={false}
              height={20}
              width={40}
              handleDiameter={24}
              offColor="#d0d4d6"
              offHandleColor="#32C5FF"
              onColor="#053d52"
              onHandleColor="#597393"
              boxShadow="0px 1px 5px rgba(0, 0, 0, 0.4)"
            />
          </UlContainer>
          <NavigationMobile>
            {open ? closeIcon : hamburguerIcon}
            {open && <NavLinks isMenu={true} closeMenu={closeMenu} />}
          </NavigationMobile>
        </MenuMain>
      </Nav>
    </Header>
  );
};

export default Navbar;
