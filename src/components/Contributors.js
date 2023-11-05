import React from "react";
import styles from "../pages/styles.module.css";

export default function Contributors() {
  return (
    <div className={styles.contributors}>
      <div className={styles.contributor}>
        <div className={styles.contributor_imgbox}>
          <img
            id={styles.contributor_img}
            src="/img/최지훈.jpeg"
            alt="최지훈"
            width="250px"
            height="300px"
            fetchpriority="high"
          />
        </div>
        <div className={styles.contributor_contents}>
          <h3 className={styles.contributor_name}>최지훈</h3>
          <div className={styles.contributor_fe}>프론트엔드 개발자</div>
          <p className={styles.contributor_desc}>
            열심히 그리고 잘 하는 개발자가 되고 싶습니다. 🌱
            <br />
            앞으로도 좋은 사람들과 좋은 코드를 만들어 나가고 싶습니다. 🙃
            <br />
            옆에 사진은 벌레 발견 3초 전 사진이에요. 🍏 🐞
          </p>
          <a
            className={styles.contributor_github}
            href="https://github.com/JitHoon"
            target="_blank"
            rel="noopener"
            aria-label="GitHub Profile"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.33em"
              height="1.33em"
              viewBox="0 -2 24 24"
              fill="currentColor"
              className="pr-2"
            >
              <path d="M10 0a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69a3.6 3.6 0 0 1 .1-2.64s.84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.4.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.75c0 .26.18.58.69.48A10 10 0 0 0 10 0"></path>
            </svg>
            JitHoon
          </a>
        </div>
      </div>
      <hr width="90%" color="gray"></hr>
      <div className={styles.contributor}>
        <div className={styles.contributor_imgbox}>
          <img
            id={styles.contributor_img}
            src="/img/장문용.jpeg"
            alt="장문용"
            width="250px"
            height="300px"
            fetchpriority="high"
          />
        </div>
        <div className={styles.contributor_contents}>
          <h3 className={styles.contributor_name}>장문용</h3>
          <div className={styles.contributor_fe}>프론트엔드 개발자</div>
          <p className={styles.contributor_desc}>
            드라마를 좋아하는 ESTP
            <br />
            개발자로서 협업과 도전을 통해 더 나은 웹 경험을 만들기 원합니다.
            <br />
            코드와 스토리텔링을 조화롭게 녹여내는 것을 목표로 합니다. 🚀✨
          </p>
          <a
            className={styles.contributor_github}
            href="https://github.com/moonyah"
            target="_blank"
            rel="noopener"
            aria-label="GitHub Profile"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.33em"
              height="1.33em"
              viewBox="0 -2 24 24"
              fill="currentColor"
              className="pr-2"
            >
              <path d="M10 0a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69a3.6 3.6 0 0 1 .1-2.64s.84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.4.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.75c0 .26.18.58.69.48A10 10 0 0 0 10 0"></path>
            </svg>
            moonyah
          </a>
        </div>
      </div>
      <hr width="90%" color="gray"></hr>
      <div className={styles.contributor}>
        <div className={styles.contributor_imgbox}>
          <img
            id={styles.contributor_img}
            src="/img/한은지.jpeg"
            alt="한은지"
            width="250px"
            height="300px"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className={styles.contributor_contents}>
          <h3 className={styles.contributor_name}>한은지</h3>
          <div className={styles.contributor_fe}>프론트엔드 개발자</div>
          <p className={styles.contributor_desc}>
            맛집 문의 010-1234-5678
            <br />
            저는 정말 행복합니다. 저는 정말 행복합니다. 왜냐하면 왜냐하면
            <br />
            왜냐하면, 왜냐하면,왜냐하면 왜냐하면 왜냐하면 왜냐하면 왜냐하면{" "}
          </p>
          <a
            className={styles.contributor_github}
            href="https://github.com/lilviolie"
            target="_blank"
            rel="noopener"
            aria-label="GitHub Profile"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.33em"
              height="1.33em"
              viewBox="0 -2 24 24"
              fill="currentColor"
              className="pr-2"
            >
              <path d="M10 0a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69a3.6 3.6 0 0 1 .1-2.64s.84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.4.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.75c0 .26.18.58.69.48A10 10 0 0 0 10 0"></path>
            </svg>
            lilviolie
          </a>
        </div>
      </div>
      <hr width="90%" color="gray"></hr>
      <div className={styles.contributor}>
        <div className={styles.contributor_imgbox}>
          <img
            id={styles.contributor_img}
            src="/img/김민섭.jpeg"
            alt="김민섭"
            width="250px"
            height="300px"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className={styles.contributor_contents}>
          <h3 className={styles.contributor_name}>김민섭</h3>
          <div className={styles.contributor_fe}>프론트엔드 개발자</div>
          <p className={styles.contributor_desc}>
            어렸을 때 레고 만드는 것을 좋아했습니다.
            <br />
            레고 같은 프론트엔드가 재밌습니다.
          </p>
          <a
            className={styles.contributor_github}
            href="https://github.com/LikeFireAndSky"
            target="_blank"
            rel="noopener"
            aria-label="GitHub Profile"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.33em"
              height="1.33em"
              viewBox="0 -2 24 24"
              fill="currentColor"
              className="pr-2"
            >
              <path d="M10 0a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69a3.6 3.6 0 0 1 .1-2.64s.84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.4.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.75c0 .26.18.58.69.48A10 10 0 0 0 10 0"></path>
            </svg>
            LikeFireAndSky
          </a>
        </div>
      </div>
      <hr width="90%" color="gray"></hr>
      <div className={styles.contributor}>
        <div className={styles.contributor_imgbox}>
          <img
            id={styles.contributor_img}
            src="/img/어승준.jpeg"
            alt="어승준"
            width="250px"
            height="300px"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className={styles.contributor_contents}>
          <h3 className={styles.contributor_name}>어승준</h3>
          <div className={styles.contributor_fe}>프론트엔드 개발자</div>
          <p className={styles.contributor_desc}>
            🏃‍♂️ 매일 성장하고 싶은 주니어 프론트엔드 개발자 입니다.
            <br />
            💻 좋은 사용자 경험을 제공하고 싶습니다.
            <br />
            🤔 좋은 코드에 대해 함께 고민하고 토론하고 싶습니다.
            <br />
            👬 함께 일하기 좋은 동료가 되고 싶습니다.
          </p>
          <a
            className={styles.contributor_github}
            href="https://github.com/seungjun222"
            target="_blank"
            rel="noopener"
            aria-label="GitHub Profile"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.33em"
              height="1.33em"
              viewBox="0 -2 24 24"
              fill="currentColor"
              className="pr-2"
            >
              <path d="M10 0a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69a3.6 3.6 0 0 1 .1-2.64s.84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.4.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.75c0 .26.18.58.69.48A10 10 0 0 0 10 0"></path>
            </svg>
            seungjun222
          </a>
        </div>
      </div>
    </div>
  );
}
