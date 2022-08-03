import { useContext } from "react";
import { ThemeContext } from "styled-components";
import Switch from "react-switch";

//components
import { LiSocial } from "../LiSocial";

//styles
import * as S from "./styles";

export const DesktopSocialLinks = ({ toggleTheme }) => {
  const { title } = useContext(ThemeContext);

  return (
    <S.Container>
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
    </S.Container>
  );
};
