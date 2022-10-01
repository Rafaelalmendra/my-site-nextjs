import Link from "next/link";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { parseCookies } from "nookies";
import { toast, ToastContainer } from "react-toastify";

//hooks
import { useGetAllPosts } from "src/hooks/useGetPosts";

//components
import { Layout } from "src/components/Layout";
import { HeadSeo } from "src/components/HeadSeo";
import { CardPost } from "src/components/Blog/CardPost";
import { CardPostSkeleton } from "src/components/Skeleton/Blog/CardPost";

//styles
import * as S from "styles/blog";

const Blog = () => {
  const { t } = useTranslation();
  const cookies = parseCookies();
  const { data, loading, error } = useGetAllPosts();

  if (error) {
    toast.error(t("errorFetching"));
  }

  return (
    <Layout>
      <S.Container>
        <HeadSeo
          title="Blog | Rafael Almendra"
          content="Conheça meus artigos sobre programação."
        />

        <ToastContainer
          theme={cookies.userTheme === "light" ? "light" : "dark"}
        />

        <S.Title>{t("welcomeToMyBlog")} 👋</S.Title>

        <S.ContainerCards>
          {loading ? (
            <CardPostSkeleton cards={3} />
          ) : (
            data?.allPosts.map((post) => (
              <Link key={post.slug} href={`/Blog/${post.slug}`}>
                <a>
                  <CardPost
                    title={post.title}
                    thumbnail={post.thumbnail?.url}
                    author={post.author}
                    date={post.date}
                    technologies={post.technologies}
                  />
                </a>
              </Link>
            ))
          )}
        </S.ContainerCards>
      </S.Container>
    </Layout>
  );
};

export default Blog;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
