import Image from 'next/image';

import { Container, Title, Post } from './style'

export default function Blog() {
  return (
    <Container>
      <Title>
        <h1>Bem vindo(a) ao meu Blog 👋</h1>
        <input type="search" placeholder="Faça uma pesquisa"/>
      </Title>

      <Post style={{ backgroundImage: "url(" + "/images/post.svg" + ")"}}>
        <p>Renderização <br /> condicional <br /> com Reactjs</p>
        <span>por <strong> Rafael Almendra</strong></span>
        <br />
        <span>30/11/2021</span>
      </Post>
    </Container>
  )
}