import Image from "next/image";
import Head from "next/head";
import { motion } from "framer-motion";

import About from "../components/About";
import {
  Container,
  Main,
  Logo,
  Title,
  ButtonHome,
  VectorOne,
  VectorTwo,
} from "../styles/home";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Rafael Almendra</title>
        <meta
          name="description"
          content="Meu nome é Rafael, sou desenvolvedor Front-end."
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <About />
    </>
  );
}
