import { useTranslation } from "react-i18next";

export const LinksNavbar = () => {
  const { t } = useTranslation();

  const links = [
    {
      id: 1,
      url: "/About",
      name: t("about"),
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
      name: t("contact"),
    },
  ];

  return { links };
};
