import "../styles/globals.css";
import Layout from "../components/Layout";
import NavBar from "../components/NavBar";

function MyApp({ Component, pageProps }) {
  const getLayout =
    Component.getLayout ||
    ((page) => (
      <Layout>
        <NavBar />
        {page}
      </Layout>
    ));
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
