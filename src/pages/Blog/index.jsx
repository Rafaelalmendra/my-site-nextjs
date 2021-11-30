import Image from 'next/image';

import { Container, Title, Post, ImageEffect, ContainerPost } from './style'

export default function Blog() {
  return (
    <Container>
      <Title>
        <h1>Bem vindo(a) ao meu Blog 👋</h1>
        <input type="search" placeholder="Faça uma pesquisa"/>
      </Title>

      <ContainerPost>
        <Post>
          <ImageEffect style={{ backgroundImage: "url(" + "/images/post.svg" + ")"}}>
          </ImageEffect>
          <p>Renderização <br /> condicional <br /> com Reactjs</p>
          <span>por <strong> Rafael Almendra</strong></span>
          <br />
          <span>30/11/2021</span>
        </Post>

        <Post >
          <ImageEffect style={{ backgroundImage: "url(" + "/images/post.svg" + ")"}}>
          </ImageEffect>
          <p>Renderização <br /> condicional <br /> com Reactjs</p>
          <span>por <strong> Rafael Almendra</strong></span>
          <br />
          <span>30/11/2021</span>
        </Post>
        </ContainerPost>
    </Container>
  )
}