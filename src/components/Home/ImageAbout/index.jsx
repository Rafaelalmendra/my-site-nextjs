import Image from "next/image";
import { Container, ReactIcon, ImageProfile } from "./styles";

const ImageAbout = () => (
  <Container>
    <ReactIcon data-aos="zoom-in">
      <Image
        src={"/images/react.svg"}
        alt="Icone do Reactjs"
        width={136}
        height={136}
      />
    </ReactIcon>

    <ImageProfile>
      <Image
        data-aos="zoom-in"
        src={"/images/profile.svg"}
        alt="Foto de perfil Rafael de Sousa Almendra"
        width={322}
        height={342}
      />
    </ImageProfile>
  </Container>
);

export default ImageAbout;
