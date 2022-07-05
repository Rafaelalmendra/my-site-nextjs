import Link from "next/link";
import { useRouter } from "next/router";

//styles
import { Container, A, ButtonContact } from "./styles";

//mock
const links = [
  {
    id: 1,
    url: "/",
    name: "Home",
  },
  {
    id: 2,
    url: "/Projects",
    name: "Projetos",
  },
  {
    id: 3,
    url: "/Blog",
    name: "Blog",
  },
  {
    id: 5,
    url: "/Contact",
    name: <ButtonContact>Contato</ButtonContact>,
  },
];

const Li = ({ className, ...props }) => {
  const router = useRouter();

  return (
    <Container>
      {links.map((link) => (
        <li key={link.id} className={`${className} black-font`} {...props}>
          <Link href={link.url}>
            <A active={router.pathname === link.url ? "active" : ""}>
              {link.name}
            </A>
          </Link>
        </li>
      ))}
    </Container>
  );
};

export default Li;
