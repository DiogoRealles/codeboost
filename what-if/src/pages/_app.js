import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { globalStyles } from "../styles/global";

globalStyles();

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />

      <Component {...pageProps} />

      <Footer />
    </>
  );
}
