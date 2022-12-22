import Link from "next/link";
import { useTranslation } from "next-i18next";

//components
import { Layout, Button, ProjectsAndBlog } from "components";

//styles
import * as S from "./styles";

//icons
import { ArrowUpRight } from "phosphor-react";

export const HomeView = ({ projects, postsBlog }) => {
  const { t } = useTranslation();

  return (
    <Layout>
      <S.Container>
        <S.Header>
          <h2>Rafael Almendra</h2>

          <S.SubtitleHeader>
            <h3>Front-end Engineer at </h3>
            <a href="https://neogrid.com" target="_blank" rel="noreferrer">
              Neogrid
            </a>
          </S.SubtitleHeader>

          <p>{t("myDescription")}</p>

          <Link href="/About">
            <a>
              <Button variant="secondary" fontSize="1rem">
                {t("aboutMe")} <ArrowUpRight size={22} />
              </Button>
            </a>
          </Link>
        </S.Header>

        <ProjectsAndBlog projects={projects} postsBlog={postsBlog} />
      </S.Container>
    </Layout>
  );
};
