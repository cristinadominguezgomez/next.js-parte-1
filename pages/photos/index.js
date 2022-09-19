import Head from "next/head";
import Link from "next/link";
export default function Photos() {
  return (
    <>
      <Head>
        <title>Portada</title>
      </Head>
      <ul>
        <li>
          <Link href="/photos/view/foto1">Foto del sol</Link>
          <br></br>
          <Link href="/photos/view/foto2">Foto de un paisaje</Link>
          <br></br>
          <Link href="/photos/view/foto3">Foto de flores</Link>
        </li>
      </ul>
    </>
  );
}
