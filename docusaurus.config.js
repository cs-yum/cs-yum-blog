const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "CS 잘 먹기",
  tagline: "Front-End와 관련된 기술들을 공부하고 정리합니다.",
  favicon: "img/favicon.ico",

  url: "https://cs-yum-blog.vercel.app",
  baseUrl: "/",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "ko",
    locales: ["ko"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
        blog: {
          showReadingTime: true,
          blogTitle: "CS 잘 먹기",
          blogDescription: "CS 잘 먹기의 개발 기록",
          blogSidebarCount: "ALL",
          blogSidebarTitle: "개발 기록",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "CS 잘 먹기",
        logo: {
          alt: "CS 잘 먹기",
          src: "img/logo.svg",
        },
        items: [
          { to: "blog", label: "Blog", position: "right" },
          {
            label: "Javascript",
            sidebarId: "Javascript",
            type: "docSidebar",
            position: "right",
          },
          {
            label: "React",
            sidebarId: "React",
            type: "docSidebar",
            position: "right",
          },
          {
            label: "네트워크",
            sidebarId: "네트워크",
            type: "docSidebar",
            position: "right",
          },
          {
            label: "운영체제",
            sidebarId: "운영체제",
            type: "docSidebar",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Contributors",
          },
          {
            title: "최지훈",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/JitHoon",
              },
              {
                label: "Portfolio",
                href: "https://jithub.oopy.io/",
              },
            ],
          },
          {
            title: "장문용",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/moonyah",
              },
            ],
          },
          {
            title: "한은지",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/lilviolie",
              },
            ],
          },
          {
            title: "김민섭",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/LikeFireAndSky",
              },
            ],
          },
          {
            title: "어승준",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/seungjun222",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} CS 잘 먹기`,
      },
      colorMode: {
        defaultMode: "dark",
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      metadata: [
        {
          name: "keywords",
          content:
            "프론트엔드 블로그, 프론트엔드 테크 블로그, FE 테크 블로그, CS 잘 먹기",
        },
      ],
    }),
};

module.exports = config;
