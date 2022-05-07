import Link from "next/link";
import { useRouter } from "next/router";
import { Container, A, ButtonContact } from "./style";

const links = [
  {
    id: 1,
    name: "Home",
    url: "/",
  },
  {
    id: 2,
    name: "Projetos",
    url: "/Projects",
  },
  {
    id: 3,
    name: "Blog",
    url: "/Blog",
  },
  {
    id: 4,
    name: "Setup",
    url: "/Setup",
  },
  {
    id: 5,
    name: <ButtonContact>Contato</ButtonContact>,
    url: "/Contact",
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
