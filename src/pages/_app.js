import "@/styles/globals.css";
import "aos/dist/aos.css";
import Layout from "@/components/layout/layout";
import fonts from "@/styles/fonts/fonts";
import styles from '../styles/Home.module.scss'

export default function App({ Component, pageProps }) {
  return (
    <>
      <main className={`${fonts.font1} ${styles.body}`}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </main>
    </>
  );
}
