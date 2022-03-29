import { useRouter } from "next/dist/client/router";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import LoadingScreen from "../../../components/LoadingScreen";
import Comments from "../../../components/Comments";
import {
  Container,
  ImageContainer,
  Techs,
  AuthorAndDate,
  AuthorImage,
  Return,
} from "../../../styles/slug";

const Slug = ({ posts }) => {
  return (
    <Container className="margins-blog">
      <Head>
        <title>titulo</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="titulo" />
      </Head>
      {/*
      <ImageContainer>
        <Image
          className="image"
          src={posts.thumbnail.url}
          alt={posts.thumbnail.alt}
          width={posts.thumbnail.dimensions.width}
          height={posts.thumbnail.dimensions.height}
        />
      </ImageContainer>
      <Techs>
        <span className="tech-blog">{posts.technologie1}</span>
        <span className="tech-blog">{posts.technologie2}</span>
      </Techs>
      <AuthorAndDate className="title-blog">
        <span>
          por <strong>{posts.author}</strong>
        </span>
        <span>{posts.date}</span>
      </AuthorAndDate>
      <AuthorImage>
        <Image
          className="profile"
          src={posts.author_image}
          alt=""
          width={80}
          height={80}
        />
      </AuthorImage>
      <h1 className="title-blog">{posts.title}</h1>
      <div className="title-blog">
        {posts.content.map((item, index) => (
          <>
            {item.type == "preformatted" ? (
              <h2 style={{ marginTop: "2rem" }}>{item.text}</h2>
            ) : (
              <p key={index}>{item.text}</p>
            )}
            {item.url ? <img src={item.url} alt="" /> : null}
          </>
        ))}
        {posts.link ? (
          <a
            href={posts.link}
            target="_blank"
            rel="noopener noreferrer"
            className="link-blog"
          >
            Clique aqui para saber mais sobre o {posts.technologie2}
          </a>
        ) : null}
      </div>
      <div
        className="divider-two"
        style={{ marginTop: "2rem", marginBottom: "2rem" }}
      ></div>
      <Comments />
      <Return>
        <Link href="/Blog">
          <a>
            <i className="bi bi-caret-left-fill"></i>Voltar para o blog
          </a>
        </Link>
      </Return>
      */}
    </Container>
  );
};

export default Slug;
