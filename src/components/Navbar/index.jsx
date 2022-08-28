import { useContext, useState } from "react";
import { ThemeContext } from "styled-components";
import Switch from "react-switch";

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
  const { title } = useContext(ThemeContext);

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

            <Switch
              width={40}
              height={20}
              onColor="#053d52"
              handleDiameter={24}
              checkedIcon={false}
              offColor="#d0d4d6"
              uncheckedIcon={false}
              onChange={toggleTheme}
              onHandleColor="#597393"
              checked={title === "dark"}
              offHandleColor="#32C5FF"
              boxShadow="0px 1px 5px rgba(0, 0, 0, 0.4)"
            />
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
