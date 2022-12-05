import { CSSProperties } from "react";

//styles
import * as S from "./styles";

interface LiSocialProps {
  className?: string;
  url: string;
  icon: string;
  style?: CSSProperties;
}

export const LiSocial = ({ className, url, icon, style }: LiSocialProps) => (
  <S.Container>
    <li>
      <a
        href={url}
        target="_blank"
        className={className}
        rel="noopener noreferrer"
        style={style}
      >
        <i className={icon}></i>
      </a>
    </li>
  </S.Container>
);
