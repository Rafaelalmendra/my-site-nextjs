import Link from "next/link";
import Image from "next/image";
import { Container, Text, Vector } from "./style";

const Footer = () => (
  <Container className="margins">
    <Text>
      <h2>Quer entrar em contato comigo?</h2>
      <Link href="/Contact">
        <a>
          <button className="global-button">Vamos lá</button>
        </a>
      </Link>
    </Text>
    <Vector>
      <Image src={"/images/footer.svg"} alt="" width={455} height={255} />
    </Vector>
  </Container>
);

export default Footer;
