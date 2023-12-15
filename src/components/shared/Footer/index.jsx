import Link from "next/link";
import Image from "next/image";

// components
import { Locales } from "../Locales";

// styles
import * as S from "./styles";

// icons
import { GithubLogo, LinkedinLogo } from "phosphor-react";

export const Footer = () => {
  return (
    <S.Container>
      <S.Content>
        <Link href="/">
          <a>
            <div className="logo-container">
              <Image
                src="/images/logo-dark-mode.svg"
                alt="Logo Rafael Almendra"
                layout="fill"
              />
            </div>
          </a>
        </Link>

        <S.LanguageAndSocials>
          <Locales />
          <a
            href="https://www.linkedin.com/in/rafaelalmendraa/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedinLogo size={28} weight="fill" />
          </a>

          <a
            href="https://github.com/Rafaelalmendra"
            target="_blank"
            rel="noreferrer"
          >
            <GithubLogo size={28} weight="fill" />
          </a>
        </S.LanguageAndSocials>
      </S.Content>
    </S.Container>
  );
};
