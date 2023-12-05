import { useTranslation } from "next-i18next";

export const LinksNavbar = () => {
  const { t } = useTranslation("common");

  const links = [
    {
      id: 1,
      url: "/",
      name: "Home",
    },
    {
      id: 2,
      url: "/About",
      name: t("about"),
    },
    {
      id: 3,
      url: "/Projects",
      name: t("projects"),
    },
    {
      id: 4,
      url: "/Blog",
      name: "Blog",
    },
    {
      id: 5,
      url: "/Contact",
      name: t("contact"),
    },
  ];

  return { links };
};
