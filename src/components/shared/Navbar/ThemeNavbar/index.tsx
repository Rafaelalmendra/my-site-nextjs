import { useEffect, useState } from "react";
import { parseCookies } from "nookies";

// icons
import { Moon, SunDim } from "phosphor-react";

interface NavbarProps {
  handleTheme: () => void;
}

export const ThemeNavbar = ({ handleTheme }: NavbarProps) => {
  const cookies = parseCookies();
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    setTheme(cookies.userTheme);
  }, [cookies]);

  return (
    <div>
      {theme === "light" && (
        <SunDim onClick={handleTheme} size={28} weight="fill" />
      )}

      {(theme === "dark" || !cookies.userTheme) && (
        <Moon onClick={handleTheme} size={28} weight="fill" />
      )}
    </div>
  );
};
