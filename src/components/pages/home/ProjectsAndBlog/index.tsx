import { useState } from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";

//components
import { Button, Card } from "components";

//types
import { ProjectProps, BlogPost } from "types";

//styles
import * as S from "./styles";

//icons
import { ArrowUpRight } from "phosphor-react";

export const ProjectsAndBlog = ({ projects, postsBlog }) => {
  const { t } = useTranslation();
  const [active, setActive] = useState<string>(t("projects"));

  const sections = [
    {
      title: t("projects"),
    },
    {
      title: "Blog",
    },
  ];

  return (
    <S.Container>
      <S.Header>
        {sections?.map((section) => (
          <S.TitleSection
            key={section?.title}
            active={section?.title === active}
            onClick={() => setActive(section?.title)}
          >
            {section?.title}
          </S.TitleSection>
        ))}
      </S.Header>

      {active === t("projects") && (
        <S.CardList>
          {projects?.map((project: ProjectProps) => (
            <Card
              key={project?.id}
              image={project?.image?.url}
              title={project?.title}
              description={project?.description}
              link={project?.deploy}
            />
          ))}
        </S.CardList>
      )}

      {active === "Blog" && (
        <S.CardList>
          {postsBlog?.map((post: BlogPost) => (
            <Card
              blog
              key={post?.slug}
              image={post?.thumbnail?.url}
              title={post?.title}
              author={post?.author}
              date={post?.date}
              link={post?.slug}
              technologies={post?.technologies}
            />
          ))}
        </S.CardList>
      )}

      <Link href={active === "Blog" ? "/Blog" : "/Projects"}>
        <a>
          <Button variant="secondary" fontSize="1rem">
            {t("seeAll")} <ArrowUpRight size={22} />
          </Button>
        </a>
      </Link>
    </S.Container>
  );
};
