import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Quote from "../components/Quote";
import { useState } from "react";

const Home: NextPage = () => {
  const [seed, setSeed] = useState(1);
  const reset = () => {
    setSeed(Math.random());
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>MyKuot</title>
        <meta name="description" content="Daily quotes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main} onClick={reset}>
        <Quote key={seed} />
      </main>
    </div>
  );
};

export default Home;
