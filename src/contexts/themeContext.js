import { createContext, useState } from "react";

//styles
import { lightTheme, darkTheme } from "src/styles/theme";

export const ThemeContext = createContext({});

export const ThemeContextProvider = (props) => {
  const [theme, setTheme] = useState(darkTheme);

  const toggleTheme = () => {
    setTheme(theme.title === "dark" ? lightTheme : darkTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
