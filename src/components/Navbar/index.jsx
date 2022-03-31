import { useContext, useState } from "react";
import { ThemeContext } from "styled-components";
import { motion } from "framer-motion";
import NavLinks from "./NavLinks";
import Switch from "react-switch";
import Logo from "../Logo";
import Link from "next/link";
import {
  Header,
  Nav,
  UlContainer,
  MenuMain,
  ButtonContact,
  NavigationMobile,
  HamburguerIcon,
  CloseIcon,
} from "./style";
import Li from "../Li";

const Navbar = ({ toggleTheme }) => {
  const { title } = useContext(ThemeContext);
  const [navbar, setNavbar] = useState(false);
  const [open, setOpen] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", changeBackground);
  }
  const hamburguerIcon = (
    <HamburguerIcon>
      <i className="bi bi-list" onClick={() => setOpen(!open)}></i>
    </HamburguerIcon>
  );
  const closeIcon = (
    <CloseIcon>
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{
          type: "spring",
          stiffness: 120,
        }}
      >
        <i className="bi bi-x" onClick={() => setOpen(!open)}></i>
      </motion.div>
    </CloseIcon>
  );
  const closeMenu = () => setOpen(false);

  return (
    <Header className={navbar ? "active" : ""}>
      <Nav className="margins-nav">
        <Logo />
        <MenuMain>
          <UlContainer>
            <Li name="Home" />
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
