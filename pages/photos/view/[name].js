import Head from "next/head";
import { useRouter } from "next/router";
import Layout from "../../../components/Layout";
import SEO from "../../../components/SEO";
import Link from "next/link";

export default function PhotoViewer() {
  const router = useRouter();

  return (
    <>
      <SEO title={`Foto: ${router.query.name}`}></SEO>
      {/* <Head>
        <title>Foto: {router.query.name}</title>
      </Head> */}
      <h1>{router.query.name}</h1>
      <img src={`gallery/${router.query.name}.jpg`} alt="foto" />
    </>
  );
}

PhotoViewer.getLayout = (page) => {
  return (
    <Layout>
      <Link href="/photos">Volver a la lista de fotos</Link>
      {page}
    </Layout>
  );
};
