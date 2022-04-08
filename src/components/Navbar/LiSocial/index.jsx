import { Container } from "./style";

const LiSocial = ({ className, url, icon, ...props }) => (
  <Container>
    <li>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        style={{ fontSize: "1.4rem" }}
        className={className}
        {...props}
      >
        <i className={icon}></i>
      </a>
    </li>
  </Container>
);

export default LiSocial;
