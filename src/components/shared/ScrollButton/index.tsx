import { useState } from "react";

//styles
import * as S from "./styles";

//icons
import { ArrowUp } from "phosphor-react";

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
    <S.Container
      onClick={scrollButtonTop}
      style={{ display: visible ? "flex" : "none" }}
    >
      <ArrowUp size={24} />
    </S.Container>
  );
};
