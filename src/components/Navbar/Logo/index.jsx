import { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import { ThemeContext } from "styled-components";

//styles
import Container from "./styles";

const Logo = () => {
  const { title } = useContext(ThemeContext);

  return title === "dark" ? (
    <Link href="/">
      <a>
        <Container>
          <Image
            src="/images/logo-dark-mode.svg"
            alt="Logo Rafael Almendra"
            width={46}
            height={46}
          />
        </Container>
      </a>
    </Link>
  ) : (
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
};

export default Logo;
