import Link from "next/link";
import { useRouter } from "next/router";

//styles
import * as S from "./styles";

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
    name: <S.ButtonContact>Contato</S.ButtonContact>,
  },
];

export const Li = ({ className, ...props }) => {
  const router = useRouter();

  return (
    <S.Container>
      {links.map((link) => (
        <li key={link.id} className={`${className} black-font`} {...props}>
          <Link href={link.url}>
            <S.A active={router.pathname === link.url ? "active" : ""}>
              {link.name}
            </S.A>
          </Link>
        </li>
      ))}
    </S.Container>
  );
};
