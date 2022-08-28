import { useState } from "react";
import Image from "next/image";

//styles
import * as S from "./styles";

//images-and-icons
import ptFlag from "../../assets/flags/pt-flag.png";
import enFlag from "../../assets/flags/en-flag.png";

const languages = [
  {
    name: "pt",
    image: ptFlag,
  },
  {
    name: "en",
    image: enFlag,
  },
];

export const Locales = () => {
  const [openFlags, setOpenFlags] = useState(false);

  return (
    <>
      <S.LocalesContainer onClick={() => setOpenFlags(!openFlags)}>
        <S.ImageFlagContainer>
          <Image layout="fill" src={ptFlag} alt="Bandeira do Brasil" />
        </S.ImageFlagContainer>

        {!openFlags ? (
          <i className="bi bi-caret-down-fill" />
        ) : (
          <i className="bi bi-caret-up-fill" />
        )}
      </S.LocalesContainer>

      {openFlags && (
        <S.LocalesOpenContainer>
          {languages.map((language) => (
            <S.Locale key={language?.name}>
              <S.FlagImage>
                <Image
                  layout="fill"
                  src={language?.image}
                  alt={`Bandeira do ${language?.name}`}
                />
              </S.FlagImage>

              <p>{language?.name}</p>
            </S.Locale>
          ))}
        </S.LocalesOpenContainer>
      )}
    </>
  );
};
