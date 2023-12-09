import { useState } from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";

// components
import { Button, Card } from "components";

// mocks
import { HomeSectionsMock } from "mocks";

// types
import { ProjectProps, BlogPost } from "types";

// styles
import * as S from "./styles";

// icons
import { ArrowUpRight } from "phosphor-react";

interface HomeViewProps {
  projects: ProjectProps[];
  postsBlog: BlogPost[];
}

export const ProjectsAndBlog = ({ projects, postsBlog }: HomeViewProps) => {
  const { t } = useTranslation();
  const { sections } = HomeSectionsMock();

  const [active, setActive] = useState<string>(t("projects"));

  return (
    <S.Container>
      <S.Header>
        {sections.map((section) => (
          <S.TitleSection
            key={section.title}
            active={section.title === active}
            onClick={() => setActive(section.title)}
          >
            {section?.title}
          </S.TitleSection>
        ))}
      </S.Header>

      {active === t("projects") && (
        <S.CardList>
          {projects.map((project) => (
            <Card
              key={project.id}
              title={project.title}
              link={project.deploy}
              image={project?.image?.url || ""}
              description={project.shortDescription}
            />
          ))}
        </S.CardList>
      )}

      {active === "Blog" && (
        <S.CardList>
          {postsBlog.map((post) => (
            <Card
              blog
              key={post.slug}
              image={post.thumbnail.url}
              title={post.title}
              author={post.author}
              date={post.date}
              link={post.slug}
              technologies={post.technologies}
            />
          ))}
        </S.CardList>
      )}

      <Link href={active === "Blog" ? "/Blog" : "/Projects"}>
        <a>
          <Button variant="tertiary" fontSize="1rem">
            {t("seeAll")} <ArrowUpRight size={22} />
          </Button>
        </a>
      </Link>
    </S.Container>
  );
};
