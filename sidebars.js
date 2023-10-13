/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: ["Welcome"],
  운영체제: [
    "운영체제 Intro",
    {
      type: "category",
      label: "Process와 Thread",
      link: {
        type: "generated-index",
      },
      collapsed: true,
      items: [
        {
          type: "autogenerated",
          dirName: "운영체제/Process와 Thread",
        },
      ],
    },
    {
      type: "category",
      label: "CPU 스케줄링",
      link: {
        type: "generated-index",
      },
      collapsed: true,
      items: [
        {
          type: "autogenerated",
          dirName: "운영체제/CPU 스케줄링",
        },
      ],
    },
    {
      type: "category",
      label: "메모리",
      link: {
        type: "generated-index",
      },
      collapsed: true,
      items: [
        {
          type: "autogenerated",
          dirName: "운영체제/메모리",
        },
      ],
    },
    {
      type: "category",
      label: "교착 상태 (Deadlock)",
      link: {
        type: "generated-index",
      },
      collapsed: true,
      items: [
        {
          type: "autogenerated",
          dirName: "운영체제/교착 상태",
        },
      ],
    },
    {
      type: "category",
      label: "가상 메모리",
      link: {
        type: "generated-index",
      },
      collapsed: true,
      items: [
        {
          type: "autogenerated",
          dirName: "운영체제/가상 메모리",
        },
      ],
    },
  ],
};

module.exports = sidebars;
