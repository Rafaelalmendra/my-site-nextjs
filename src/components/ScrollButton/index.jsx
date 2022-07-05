import Image from "next/image";
import { useState } from "react";

//styles
import { Container } from "./styles";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;

    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollButtonTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", toggleVisible);
  }

  return (
    <Container>
      <button
        onClick={scrollButtonTop}
        style={{ display: visible ? "inline" : "none" }}
      >
        <Image
          src={"/images/top.svg"}
          alt="Botão de voltar ao topo"
          width={50}
          height={50}
        />
      </button>
    </Container>
  );
};

export default ScrollButton;
