const LiSocial = ({ className, url, icon, ...props }) => (
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
);

export default LiSocial;
