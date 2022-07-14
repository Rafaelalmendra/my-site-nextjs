import Link from "next/link";
import Image from "next/image";

//components
import { Button } from "src/components/Button";

//styles
import * as S from "./styles";

export const ProjectFooter = () => (
  <S.Container>
    <S.Text>
      <h2>Quer entrar em contato comigo?</h2>

      <Link href="/Contact">
        <a>
          <Button>Vamos lá</Button>
        </a>
      </Link>
    </S.Text>

    <S.Vector>
      <Image src={"/images/footer.svg"} alt="" width={455} height={255} />
    </S.Vector>
  </S.Container>
);

export default ProjectFooter;
