import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { parseCookies } from "nookies";
import { useMediaQuery } from "react-responsive";

// components
import { Links } from "./Links";
import { MobileLinks } from "./MobileLinks";

// styles
import * as S from "./styles";
import { ThemeNavbar } from "./ThemeNavbar";

// icons
import { List } from "phosphor-react";

export const Navbar = ({ handleTheme }) => {
  const cookies = parseCookies();
  const isMobile = useMediaQuery({ query: "(max-width: 850px)" });

  const [openMobileNavbar, setOpenMobileNavbar] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", changeBackground);
  }

  return (
    <S.NavbarContainer className={navbar ? "active" : ""}>
      <S.NavbarContent>
        <Link href="/">
          <a>
            <div className="logo-container">
              {!cookies.userTheme && (
                <Image
                  src="/images/logo-dark-mode.svg"
                  alt="Logo Rafael Almendra"
                  layout="fill"
                />
              )}

              {!!cookies.userTheme && (
                <Image
                  src={
                    cookies.userTheme === "dark"
                      ? "/images/logo-dark-mode.svg"
                      : "/images/logo.svg"
                  }
                  alt="Logo Rafael Almendra"
                  layout="fill"
                />
              )}
            </div>
          </a>
        </Link>

        {!isMobile && <Links />}

        <S.NavigationContainer>
          <ThemeNavbar handleTheme={handleTheme} />

          {!!isMobile && !openMobileNavbar && (
            <List
              size={28}
              onClick={() => setOpenMobileNavbar(!openMobileNavbar)}
              style={{ marginLeft: "1.125rem" }}
            />
          )}

          {!!isMobile && !!openMobileNavbar && (
            <MobileLinks
              closeMenu={() => setOpenMobileNavbar(!openMobileNavbar)}
            />
          )}
        </S.NavigationContainer>
      </S.NavbarContent>
    </S.NavbarContainer>
  );
};
