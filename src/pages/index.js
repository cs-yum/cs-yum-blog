import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Head from "@docusaurus/Head";
import Contributors from "@site/src/components/Contributors";
import Stack from "@site/src/components/Stack";

import styles from "./styles.module.css";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout description="FE Tech Blog">
      <Head>
        <meta property="og:image" content="/img/yummy.png" />
      </Head>
      <main id={styles.welcome}>
        <h1>CS 잘 먹기 Blog를 소개합니다.</h1>
        <p>
          'CS 잘 먹기' 는 Computer Science 잘 먹기의 줄임말로,
          <br /> Front-End 관련 기술을 함께 공부하고 정리하는 Tech Blog입니다.
        </p>
        <h2 className={styles.title2}>🧑🏻‍💻 Contributors</h2>
        <Contributors />
        <h2 className={styles.title2}>🧑🏻‍💻 Stack</h2>
        <Stack />
        <h2 className={styles.title2}>🧑🏻‍💻 More Info.</h2>
        <p>
          프로젝트의 자세한 소스코드를 확인하고 싶다면,
          <a src="https://github.com/cs-yum/cs-yum-blog">GitHub</a>로 방문해
          주세요!
        </p>
      </main>
    </Layout>
  );
}
