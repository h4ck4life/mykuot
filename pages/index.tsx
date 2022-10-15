import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Quote from "../components/quote";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>MyKuot</title>
        <meta name="description" content="Daily quotes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Quote />
      </main>
    </div>
  );
};

type Quote = {
  author: string;
  content: string;
  length: number;
};

export default Home;
