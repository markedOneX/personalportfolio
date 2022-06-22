import "../styles/globals.scss";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { App, container } from "../styles/Main.module.scss";

function MyApp({ Component, pageProps }) {
  return (
    <div className={App}>
      <Header />
      <div className={container}>
        <Component {...pageProps} />
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default MyApp;
