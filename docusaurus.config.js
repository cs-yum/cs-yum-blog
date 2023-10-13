const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "CS 잘 먹기",
  tagline: "Front-End와 관련된 기술들을 공부하고 정리합니다.",
  favicon: "img/favicon.ico",

  url: "https://cs-yum.github.io",
  baseUrl: "/cs-yum-blog/",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  organizationName: "cs-yum",
  projectName: "cs-yum-blog",
  deploymentBranch: "gh-pages",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
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
          {
            label: "Intro",
            to: "/blog",
            position: "right",
          },
          {
            label: "운영체제",
            sidebarId: "운영체제",
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
            label: "Typescript",
            sidebarId: "Typescript",
            type: "docSidebar",
            position: "right",
          },
          {
            label: "React",
            sidebarId: "React",
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
              /* {
                label: "Blog",
                to: "/blog",
              },*/
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
        ],
        copyright: `Copyright © ${new Date().getFullYear()} CS 잘 먹기`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
