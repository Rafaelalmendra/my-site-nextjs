import Head from "next/head";

const HeadSeo = ({ title, content }) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={content} />
  </Head>
);

export default HeadSeo;
