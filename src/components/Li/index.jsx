import Link from "next/link";

const Li = ({ name }) => (
  <li className="desktop black-font">
    <Link href="/">
      <a>{name}</a>
    </Link>
  </li>
);

export default Li;
