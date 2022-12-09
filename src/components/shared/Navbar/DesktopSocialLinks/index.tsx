//components
import { LiSocial } from "../LiSocial";

//styles
import * as S from "./styles";

export const DesktopSocialLinks = () => {
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
    </S.Container>
  );
};
