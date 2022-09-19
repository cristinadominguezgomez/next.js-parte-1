import Head from "next/head";

export default function SEO({ title = "Web personal de Cristina Dominguez " }) {
  return (
    <Head>
      <title>{title}</title>
      {/* {description ? <meta name="description" content={description} /> : null} */}
    </Head>
  );
}
