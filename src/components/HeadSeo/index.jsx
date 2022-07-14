import Head from "next/head";

export const HeadSeo = ({ title, content }) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={content} />
  </Head>
);
