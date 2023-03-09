import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { motion } from "framer-motion";

// mocks
import { languages } from "mocks";

// styles
import * as S from "./styles";

// icons
import { CaretDown, CaretUp } from "phosphor-react";

interface LanguageProps {
  name: string;
  image: string;
}

export const Locales = () => {
  const { i18n } = useTranslation();
  const { pathname, locales, locale } = useRouter();

  const [openFlags, setOpenFlags] = useState(false);
  const [activeLanguage, setActiveLanguage] = useState<LanguageProps>(
    languages[0]
  );

  useEffect(() => {
    const activeLocale = locales?.find((item) => item === locale);
    const activeLanguage = languages.find((item) => item.name === activeLocale);

    setActiveLanguage(activeLanguage);
  }, [locale, locales]);

  const handleChangeLanguage = (language: LanguageProps) => {
    setActiveLanguage(language);
    i18n?.changeLanguage(language?.name);
  };

  return (
    <S.LocalesContainer onClick={() => setOpenFlags(!openFlags)}>
      <S.ImageFlagContainer>
        <Image
          layout="fill"
          src={activeLanguage?.image}
          alt={`Bandeira do ${activeLanguage?.name}`}
        />
      </S.ImageFlagContainer>

      {openFlags ? (
        <CaretUp size={22} weight="bold" />
      ) : (
        <CaretDown size={22} weight="bold" />
      )}

      {!!openFlags && (
        <motion.div
          className="locales-open-container"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", duration: 0.4 }}
        >
          {languages?.map((language) => (
            <Link key={language?.name} href={pathname} locale={language?.name}>
              <S.Locale
                id="language"
                onClick={() => handleChangeLanguage(language)}
              >
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
        </motion.div>
      )}
    </S.LocalesContainer>
  );
};
