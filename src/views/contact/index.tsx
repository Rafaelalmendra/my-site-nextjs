import { useTranslation } from "next-i18next";

//components
import { Layout, HeadSeo, Form } from "components";

//styles
import * as S from "./styles";

export const ContactView = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <S.Container>
        <HeadSeo
          title={`${t("contact")} | Rafael Almendra`}
          content="Entre em contato comigo através do formulário."
        />

        <S.FormContainer>
          <h1>{t("sendMessage")}</h1>
          <Form />
        </S.FormContainer>
      </S.Container>
    </Layout>
  );
};
