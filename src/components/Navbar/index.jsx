import { useState } from "react";

//components
import Li from "./Li";
import Logo from "./Logo";
import MobileLinks from "./MobileLinks";
import { OpenIcon, CloseIcon } from "./Icons";
import DesktopSocialLinks from "./DesktopSocialLinks";

//styles
import { Header, Nav, UlContainer, NavigationMobile } from "./styles";

const Navbar = ({ toggleTheme }) => {
  const [open, setOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);

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
