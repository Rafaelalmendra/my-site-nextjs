import { useState } from "react";

//components
import { Li } from "./Li";
import { Logo } from "./Logo";
import { MobileLinks } from "./MobileLinks";
import { OpenIcon, CloseIcon } from "./Icons";
import { DesktopSocialLinks } from "./DesktopSocialLinks";

//styles
import * as S from "./styles";

export const Navbar = ({ toggleTheme }) => {
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
    <S.Header className={navbar ? "active" : ""}>
      <S.Nav>
        <Logo />

        <S.UlContainer>
          <Li className="desktop" />
        </S.UlContainer>

        <DesktopSocialLinks toggleTheme={toggleTheme} />

        <S.NavigationMobile>
          {open ? closeNavbar : openNavbar}
          {open && <MobileLinks closeMenu={() => setOpen(false)} />}
        </S.NavigationMobile>
      </S.Nav>
    </S.Header>
  );
};
