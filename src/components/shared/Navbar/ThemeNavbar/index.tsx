import { parseCookies } from "nookies";
import { Moon, SunDim } from "phosphor-react";

interface NavbarProps {
  toggleTheme: () => void;
}

export const ThemeNavbar = ({ toggleTheme }: NavbarProps) => {
  const cookies = parseCookies();

  return (
    <>
      {cookies.userTheme === "light" && (
        <SunDim onClick={toggleTheme} size={28} weight="fill" />
      )}

      {cookies.userTheme === "dark" && (
        <Moon onClick={toggleTheme} size={28} weight="fill" />
      )}

      {!cookies.userTheme && (
        <Moon onClick={toggleTheme} size={28} weight="fill" />
      )}
    </>
  );
};
