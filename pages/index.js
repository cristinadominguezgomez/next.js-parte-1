import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Head from "next/head";
import SEO from "../components/SEO";
import { SERVER_PROPS_ID } from "next/dist/shared/lib/constants";

export default function Home() {
  const router = useRouter();

  useEffect(() => {}, [router]);
  return (
    <>
      <Head>
        <title>Prueba portada</title>
      </Head>
      <h1>Ola amig@s!!!</h1>;
      <button
        onClick={() => {
          router.push("/photos");
        }}
      >
        IR A FOTOS
      </button>
    </>
  );
}
