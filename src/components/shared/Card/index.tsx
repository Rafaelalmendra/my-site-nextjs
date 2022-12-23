import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "next-i18next";

//types
import { CardProps } from "types";

//styles
import * as S from "./styles";

//icons
import { ArrowRight } from "phosphor-react";

export const Card = ({
  title,
  description,
  image,
  link,
  blog = false,
  author,
  date,
  technologies,
}: CardProps) => {
  const { t } = useTranslation();

  return (
    <>
      {!blog && (
        <a href={link} target="_blank" rel="noreferrer">
          <S.Container>
            <S.ImageContainer>
              <Image
                src={image}
                alt={title}
                layout="fill"
                placeholder="blur"
                blurDataURL={image}
              />
            </S.ImageContainer>

            <S.Content>
              <h6>{title}</h6>
              <p>{description}</p>
              <p className="link">
                letmeask-efccf.web.app <ArrowRight size={22} />
              </p>
            </S.Content>
          </S.Container>
        </a>
      )}

      {blog && (
        <Link href={`/Blog/${link}`}>
          <a>
            <S.ContainerBlog>
              <S.ImageContainerBlog>
                <Image
                  src={image}
                  alt={title}
                  layout="fill"
                  placeholder="blur"
                  blurDataURL={image}
                />
              </S.ImageContainerBlog>

              <S.ContentBlog>
                <h6>{title}</h6>
                <S.AuthorAndDate>
                  <p>
                    {t("by")} {author}
                  </p>
                  <p>{date}</p>
                </S.AuthorAndDate>

                <S.TechListBlog>
                  {technologies?.map((tech, index) => (
                    <S.Tech key={index}>{tech?.technologie}</S.Tech>
                  ))}
                </S.TechListBlog>
              </S.ContentBlog>
            </S.ContainerBlog>
          </a>
        </Link>
      )}
    </>
  );
};
