import { parseCookies } from "nookies";

// icons
import { Moon, SunDim } from "phosphor-react";

interface NavbarProps {
  handleTheme: () => void;
}

export const ThemeNavbar = ({ handleTheme }: NavbarProps) => {
  const cookies = parseCookies();

  return (
    <>
      {cookies.userTheme === "light" && (
        <SunDim onClick={handleTheme} size={28} weight="fill" />
      )}

      {cookies.userTheme === "dark" && (
        <Moon onClick={handleTheme} size={28} weight="fill" />
      )}

      {!cookies.userTheme && (
        <Moon onClick={handleTheme} size={28} weight="fill" />
      )}
    </>
  );
};
