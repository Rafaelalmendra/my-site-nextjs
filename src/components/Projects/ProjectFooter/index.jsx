import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "next-i18next";

//components
import { Button } from "src/components/Button";

//styles
import * as S from "./styles";

export const ProjectFooter = () => {
  const { t } = useTranslation();

  return (
    <S.Container>
      <S.Text>
        <h2>{t("contactFooter")}</h2>

        <Link href="/Contact">
          <a>
            <Button>{t("letsGo")}</Button>
          </a>
        </Link>
      </S.Text>

      <S.Vector>
        <Image
          src={"/images/footer.svg"}
          alt="vetor do footer"
          width={455}
          height={255}
        />
      </S.Vector>
    </S.Container>
  );
};

export default ProjectFooter;
