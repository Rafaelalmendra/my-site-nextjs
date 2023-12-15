import { useTranslation } from "next-i18next";

export const HomeSectionsMock = () => {
  const { t } = useTranslation("common");

  const sections = [
    {
      title: t("projects"),
    },
    {
      title: "Blog",
    },
  ];

  return { sections };
};
