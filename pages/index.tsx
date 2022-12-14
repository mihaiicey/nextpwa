import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";

export default function Home() {
  const [installBtn, setInstallBtn] = useState<boolean>(false);
  const [deferredPrompt, setDeferredPrompt] = useState<any>();

  useEffect(() => {
    (function () {
      window.addEventListener("beforeinstallprompt", (e) => {
        // Prevent the mini-infobar from appearing on mobile
        e.preventDefault();
        // Stash the event so it can be triggered later.
        // setDeferredPrompt(e);
        // Update UI notify the user they can install the PWA
        // showInstallPromotion();
        setInstallBtn(true);
      });
    })();
  });

  function install() {
    setInstallBtn(false);
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then((choiceResult: any) => {
      if (choiceResult.outcome === "accepted") {
        setInstallBtn(false);
      } else {
        setInstallBtn(true);
      }
    });
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <h1 className={styles.title}>
          Welcome to <a href="https://icey.dev">iceCommerce</a>
        </h1>

        <p className={styles.description}>Download the app here </p>
        {installBtn ? (
          <button onClick={() => install()} className={styles.installpwa}>
            Install the shop
          </button>
        ) : (
          ""
        )}
        
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
