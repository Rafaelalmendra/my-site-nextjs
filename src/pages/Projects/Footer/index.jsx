import Link from 'next/link';
import Image from 'next/image';

import {
  FooterVector,
  FooterText,
  FooterContainer
} from '../../../styles/projectsFooter';

export default function Footer() {
  return (
    <FooterContainer>
        <FooterText>
          <h2>Quer entrar em contato comigo?</h2>
          <Link href="/Contact">
            <a><button className="global-button">Vamos lá</button></a>
          </Link>
        </FooterText>

        <FooterVector>
          <Image
            src={"/images/footer.svg"}
            alt=""
            width={455}
            height={255}
          />
        </FooterVector>
      </FooterContainer>
  );
};