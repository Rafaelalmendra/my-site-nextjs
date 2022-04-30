import Link from "next/link";
import Image from "next/image";
import { Container, Text, Vector } from "./style";
import Button from "@/components/Button";

const Footer = () => (
  <Container className="margins">
    <Text>
      <h2>Quer entrar em contato comigo?</h2>
      <Link href="/Contact">
        <a>
          <Button>Vamos lá</Button>
        </a>
      </Link>
    </Text>
    <Vector>
      <Image src={"/images/footer.svg"} alt="" width={455} height={255} />
    </Vector>
  </Container>
);

export default Footer;
