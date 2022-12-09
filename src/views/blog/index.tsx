import Link from "next/link";
import { useTranslation } from "next-i18next";
import { parseCookies } from "nookies";
import { toast, ToastContainer } from "react-toastify";

//hooks
import { useGetAllPosts } from "hooks";

//components
import { Layout, CardPost, CardPostSkeleton } from "components";

//types
import { BlogPost } from "types";

//styles
import * as S from "./styles";

export const BlogView = () => {
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
