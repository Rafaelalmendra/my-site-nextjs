import { Container } from "./styles";

const LiSocial = ({ className, url, icon, ...props }) => (
  <Container>
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
  </Container>
);

export default LiSocial;
