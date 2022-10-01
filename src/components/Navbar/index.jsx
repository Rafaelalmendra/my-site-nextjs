import { useState } from "react";
import { parseCookies } from "nookies";

//components
import { Li } from "./Li";
import { Logo } from "./Logo";
import { Locales } from "../Locales";
import { LiSocial } from "./LiSocial";
import { MobileLinks } from "./MobileLinks";
import { OpenIcon, CloseIcon } from "./Icons";

//styles
import * as S from "./styles";

export const Navbar = ({ toggleTheme }) => {
  const cookies = parseCookies();

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

        <S.NavigationDesktop>
          <Li className="desktop" />
        </S.NavigationDesktop>

        <S.NavigationContainer>
          <S.SocialLinksContainer>
            <Locales />

            <LiSocial
              className="desktop"
              icon="bi bi-linkedin"
              url="https://www.linkedin.com/in/rafaelalmendraa/"
            />

            <LiSocial
              className="desktop"
              icon="bi bi-github"
              url="https://github.com/Rafaelalmendra"
            />

            {cookies.userTheme === "light" && (
              <i
                onClick={toggleTheme}
                className="bi bi-brightness-high-fill light"
              />
            )}

            {cookies.userTheme === "dark" && (
              <i onClick={toggleTheme} className="bi bi-moon-fill" />
            )}

            {!cookies.userTheme && (
              <i onClick={toggleTheme} className="bi bi-moon-fill" />
            )}
          </S.SocialLinksContainer>

          <S.NavigationMobile>
            {open ? closeNavbar : openNavbar}
            {open && <MobileLinks closeMenu={() => setOpen(false)} />}
          </S.NavigationMobile>
        </S.NavigationContainer>
      </S.Nav>
    </S.Header>
  );
};
