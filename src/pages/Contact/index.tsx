import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

//components
import { Layout, HeadSeo, Form } from "components";

//styles
import { Container, FormContainer } from "styles/contact";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <Container>
        <HeadSeo
          title={`${t("contact")} | Rafael Almendra`}
          content="Entre em contato comigo através do formulário."
        />

        <FormContainer>
          <h1>{t("sendMessage")}</h1>
          <Form />
        </FormContainer>
      </Container>
    </Layout>
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
