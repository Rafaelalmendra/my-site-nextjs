import * as S from "./styles";

export const LiSocial = ({ className, url, icon, ...props }) => (
  <S.Container>
    <li>
      <a
        {...props}
        href={url}
        target="_blank"
        className={className}
        rel="noopener noreferrer"
        style={{ fontSize: "1.4rem" }}
      >
        <i className={icon}></i>
      </a>
    </li>
  </S.Container>
);
