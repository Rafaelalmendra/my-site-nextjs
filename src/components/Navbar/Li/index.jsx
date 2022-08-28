import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

//styles
import * as S from "./styles";

export const Li = ({ className, ...props }) => {
  const router = useRouter();
  const { t } = useTranslation();

  const links = [
    {
      id: 1,
      url: "/",
      name: "Home",
    },
    {
      id: 2,
      url: "/Projects",
      name: t("projects"),
    },
    {
      id: 3,
      url: "/Blog",
      name: "Blog",
    },
    {
      id: 5,
      url: "/Contact",
      name: <S.ButtonContact>{t("contact")}</S.ButtonContact>,
    },
  ];

  return (
    <S.Container>
      {links.map((link) => (
        <li key={link.id} className={`${className} black-font`} {...props}>
          <Link href={link.url}>
            <S.Link active={router.pathname === link.url ? "active" : ""}>
              {link.name}
            </S.Link>
          </Link>
        </li>
      ))}
    </S.Container>
  );
};
