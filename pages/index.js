import Head from "next/head";
import styles from "../styles/Home.module.css";

import Pokemons from "../components/Pokemons";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pokedex</title>
      </Head>

      <main>
        <h1>Pokedex</h1>
        <Pokemons />
      </main>
    </div>
  );
}
