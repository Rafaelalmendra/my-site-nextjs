import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { parseCookies } from "nookies";
import { useMediaQuery } from "react-responsive";

//components
import { Links } from "./Links";
import { MobileLinks } from "./MobileLinks";

//styles
import * as S from "./styles";

//icons
import { List } from "phosphor-react";
import { ThemeNavbar } from "./ThemeNavbar";

interface NavbarProps {
  toggleTheme: () => void;
}

export const Navbar = ({ toggleTheme }: NavbarProps) => {
  const cookies = parseCookies();
  const isMobile = useMediaQuery({ query: "(max-width: 850px)" });

  const [open, setOpen] = useState<boolean>(false);
  const [navbar, setNavbar] = useState<boolean>(false);

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

  return (
    <S.NavbarContainer className={navbar ? "active" : ""}>
      <S.NavbarContent>
        <Link href="/">
          <a>
            <Image
              src={
                cookies.userTheme === "dark"
                  ? "/images/logo-dark-mode.svg"
                  : "/images/logo.svg"
              }
              alt="Logo Rafael Almendra"
              width={38}
              height={38}
            />
          </a>
        </Link>

        {!isMobile && <Links />}

        <S.NavigationContainer>
          <ThemeNavbar toggleTheme={toggleTheme} />

          {isMobile && !open && (
            <List size={28} onClick={() => setOpen(!open)} />
          )}

          {isMobile && open && <MobileLinks closeMenu={() => setOpen(!open)} />}
        </S.NavigationContainer>
      </S.NavbarContent>
    </S.NavbarContainer>
  );
};
