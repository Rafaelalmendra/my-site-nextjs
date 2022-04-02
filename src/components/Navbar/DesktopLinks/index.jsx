import { useContext } from "react";
import { ThemeContext } from "styled-components";
import Switch from "react-switch";
import Li from "../Li";
import LiSocial from "../LiSocial";
import { UlContainer, ButtonContact } from "./style";

const DesktopLinks = ({ toggleTheme }) => {
  const { title } = useContext(ThemeContext);

  return (
    <UlContainer>
      <Li className="desktop" url="/" name="Home" />
      <Li className="desktop" url="/Projects" name="Projetos" />
      <Li className="desktop" url="/Blog" name="Blog" />
      <Li
        className="desktop"
        url="/Contact"
        name={<ButtonContact>Contato</ButtonContact>}
      />
      <LiSocial
        className="desktop"
        url="https://www.linkedin.com/in/rafaelalmendradev/"
        icon="bi bi-linkedin"
      />
      <LiSocial
        className="desktop"
        url="https://github.com/Rafaelalmendra"
        icon="bi bi-github"
      />
      <Switch
        onChange={toggleTheme}
        checked={title === "dark"}
        checkedIcon={false}
        uncheckedIcon={false}
        height={20}
        width={40}
        handleDiameter={24}
        offColor="#d0d4d6"
        offHandleColor="#32C5FF"
        onColor="#053d52"
        onHandleColor="#597393"
        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.4)"
      />
    </UlContainer>
  );
};

export default DesktopLinks;