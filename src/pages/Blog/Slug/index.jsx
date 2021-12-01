import Image from 'next/image';

import { Container, Techs, AuthorAndDate, AuthorImage } from './style';

export default function Slug() {
  return (
    <Container className="margins-blog">
      <Image 
        className="image"
        src={"/images/post.svg"}
        alt=""
        width={745}
        height={419}
      />

      <Techs>
        <span className="tech-blog">React</span>
        <span className="tech-blog">Nexjs</span>
      </Techs>

      <h1 className="title-blog">Renderização Condicional - Reactjs</h1>

      <AuthorAndDate className="title-blog">
        <span>por <strong>Rafael Almendra</strong></span>
        <span>30/11/2021</span>
      </AuthorAndDate>

      <AuthorImage>
        <Image
          className="profile"
          src={"/images/author.svg"}
          alt=""
          width={80}
          height={90}
        />
      </AuthorImage>
    </Container>
  )
};