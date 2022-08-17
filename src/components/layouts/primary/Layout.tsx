import Head from "next/head";
import { ReactNode } from "react";
import styles from "./Layout.module.css";

export interface ILayout {
  children: ReactNode;
}

const PrimaryLayout: React.FC<ILayout> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Primary Layout Example</title>
      </Head>
      <main className={styles.main}>{children}</main>
    </>
  );
};

export default PrimaryLayout;
