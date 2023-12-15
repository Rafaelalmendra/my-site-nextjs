import { parseCookies, setCookie } from "nookies";

// styles
import { lightTheme, darkTheme } from "styles";

export const verifyTheme = () => {
  const cookies = parseCookies();

  if (cookies.userTheme) {
    return cookies.userTheme === "light" ? lightTheme : darkTheme;
  }

  return darkTheme;
};

export const changeTheme = (theme) => {
  setCookie(null, "userTheme", theme.title === "dark" ? "light" : "dark", {
    maxAge: 30 * 24 * 60 * 60,
    path: "/",
  });
};
