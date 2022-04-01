import { useState } from "react";
import { OpenIcon, CloseIcon } from "./Icons";
import MobileLinks from "./MobileLinks";
import Ul from "./DesktopLinks";
import Logo from "./Logo";
import { Header, Nav, MenuMain, NavigationMobile } from "./style";

const Navbar = ({ toggleTheme }) => {
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
  const openNavbar = <OpenIcon onClick={() => setOpen(!open)} />;
  const closeNavbar = <CloseIcon onClick={() => setOpen(!open)} />;

  return (
    <Header className={navbar ? "active" : ""}>
      <Nav className="margins-nav">
        <Logo />
        <MenuMain>
          <Ul toggleTheme={toggleTheme} />
          <NavigationMobile>
            {open ? closeNavbar : openNavbar}
            {open && <MobileLinks closeMenu={() => setOpen(false)} />}
          </NavigationMobile>
        </MenuMain>
      </Nav>
    </Header>
  );
};

export default Navbar;
