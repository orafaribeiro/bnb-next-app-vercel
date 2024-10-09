import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="./bnb.svg"
          alt="Next.js logo"
          width={200}
          height={200}
        />
        <ol>
          <li>Projeto NextJS do BNB</li>
          <li>
            Testando deploy na Vercel
          </li>
        </ol>
      </main>
    </div>
  );
}
