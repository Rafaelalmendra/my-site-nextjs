import { useState } from "react";
import Image from "next/image";

//styles
import * as S from "./styles";

export const ScrollButton = () => {
  const [visible, setVisible] = useState<boolean>(false);

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
    <S.Container>
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
    </S.Container>
  );
};
