import Image from "next/image";
import Link from "next/link";
import Container from "./style";

const Logo = () => (
  <Link href="/">
    <a>
      <Container>
        <Image
          src="/images/logo.svg"
          alt="Logo Rafael Almendra"
          width={46}
          height={46}
        />
      </Container>
    </a>
  </Link>
);

export default Logo;
