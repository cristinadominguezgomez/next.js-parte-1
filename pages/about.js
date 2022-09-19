import Head from "next/head";
import Link from "next/link";

export default function About() {
  return (
    <section className="about">
      <Head>
        <title>Sobre mi</title>
      </Head>
      <h1>About</h1>
      <p>Esta es la pagina de about</p>
      {/*<a href="/">Volver a la portada</a>*/}
      <Link href="/">Volver a la portada principal </Link>
    </section>
  );
}
