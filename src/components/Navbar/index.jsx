import { useState } from "react";
import { OpenIcon, CloseIcon } from "./Icons";
import DesktopSocialLinks from "./DesktopSocialLinks";
import MobileLinks from "./MobileLinks";
import Logo from "./Logo";
import Li from "./Li";
import { Header, Nav, UlContainer, NavigationMobile } from "./style";

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
      <Nav className="margins">
        <Logo />
        <UlContainer>
          <Li className="desktop" />
        </UlContainer>
        <DesktopSocialLinks toggleTheme={toggleTheme} />
        <NavigationMobile>
          {open ? closeNavbar : openNavbar}
          {open && <MobileLinks closeMenu={() => setOpen(false)} />}
        </NavigationMobile>
      </Nav>
    </Header>
  );
};

export default Navbar;
