import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

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
  const { i18n } = useTranslation();
  const { pathname, locales, locale } = useRouter();
  const [openFlags, setOpenFlags] = useState(false);
  const [activeLanguage, setActiveLanguage] = useState(languages[0]);

  useEffect(() => {
    const activeLocale = locales?.find((item) => item === locale);
    const activeLanguage = languages.find((item) => item.name === activeLocale);

    setActiveLanguage(activeLanguage);
  }, [locale, locales]);

  const handleChangeLanguage = (language) => {
    setActiveLanguage(language);
    i18n?.changeLanguage(language?.name);
  };

  return (
    <>
      <S.LocalesContainer onClick={() => setOpenFlags(!openFlags)}>
        <S.ImageFlagContainer>
          <Image
            layout="fill"
            src={activeLanguage?.image}
            alt={`Bandeira do ${activeLanguage?.name}`}
          />
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
            <Link key={language?.name} href={pathname} locale={language?.name}>
              <S.Locale onClick={() => handleChangeLanguage(language)}>
                <S.FlagImage>
                  <Image
                    layout="fill"
                    src={language?.image}
                    alt={`Bandeira do ${language?.name}`}
                  />
                </S.FlagImage>

                <p>{language?.name}</p>
              </S.Locale>
            </Link>
          ))}
        </S.LocalesOpenContainer>
      )}
    </>
  );
};
