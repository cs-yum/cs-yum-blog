import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Contributors from "@site/src/components/Contributors";
import Stack from "@site/src/components/Stack";

import styles from "./styles.module.css";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Description will go into a meta tag in <head />"
    >
      <main id={styles.welcome}>
        <img alt="로고" width="50" src="/img/logo.svg" />
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
