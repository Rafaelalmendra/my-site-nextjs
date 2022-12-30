import { NextPage } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

//components
import { HeadSeo } from "components";

//views
import { ContactView } from "views";

const Contact: NextPage = () => {
  const { t } = useTranslation("common");

  return (
    <>
      <HeadSeo
        title={`${t("contact")} | Rafael Almendra`}
        content="Entre em contato comigo através do formulário."
      />

      <ContactView />
    </>
  );
};

export default Contact;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
