import Link from "next/link";
import { useRouter } from "next/router";

// mocks
import { LinksNavbar } from "mocks";

// styles
import * as S from "./styles";

interface LiProps {
  onClick?: () => void;
}

export const Links = ({ onClick }: LiProps) => {
  const router = useRouter();
  const { links } = LinksNavbar();

  return (
    <S.Container onClick={onClick}>
      <ul>
        {links.map((link) => (
          <S.Li key={link?.id} active={router?.pathname === link?.url}>
            <Link href={link?.url}>
              <a>{link?.name}</a>
            </Link>
          </S.Li>
        ))}
      </ul>
    </S.Container>
  );
};
