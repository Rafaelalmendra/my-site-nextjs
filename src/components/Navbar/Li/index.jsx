import Link from "next/link";

const Li = ({ className, url, name, ...props }) => (
  <li className={`${className} black-font`} {...props}>
    <Link href={url}>
      <a>{name}</a>
    </Link>
  </li>
);

export default Li;
