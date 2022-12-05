import Link from "next/link";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { parseCookies } from "nookies";
import { toast, ToastContainer } from "react-toastify";

//hooks
import { useGetAllPosts } from "hooks";

//components
import { Layout, HeadSeo, CardPost, CardPostSkeleton } from "components";

//types
import { BlogPost } from "types";

//styles
import * as S from "styles/blog";

const Blog = () => {
  const { t } = useTranslation();
  const cookies = parseCookies();
  const { data, loading, error } = useGetAllPosts();

  const dataBlog: BlogPost[] = data?.allPosts;

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
            dataBlog?.map((post) => (
              <Link key={post?.slug} href={`/Blog/${post?.slug}`}>
                <a>
                  <CardPost
                    date={post?.date}
                    title={post?.title}
                    author={post?.author}
                    thumbnail={post?.thumbnail?.url}
                    technologies={post?.technologies}
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
