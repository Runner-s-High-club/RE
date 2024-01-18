import Image from "next/image";
import styles from "./page.module.css";
import { Button } from "@fe/ui";

export default function Home() {
  return (
    <main className={styles.main}>
      <Button label="버튼" />
    </main>
  );
}
