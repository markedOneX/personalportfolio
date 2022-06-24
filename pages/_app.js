import { App, container } from "../styles/Main.module.scss";
import Head from "next/head";
import "../styles/globals.scss";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <div className={App}>
      <Head>
        <title>Home | Shubham Adke</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <div className={container}>
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  );
}

export default MyApp;
