/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  FreeTopic: [
    "FreeTopic Intro",
    {
      type: "category",
      label: "Free Topic",
      link: {
        type: "generated-index",
      },
      collapsed: true,
      items: [
        {
          type: "autogenerated",
          dirName: "FreeTopic",
        },
      ],
    },
  ],
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
  네트워크: [
    "네트워크 Intro",
    {
      type: "category",
      label: "OSI 7계층 / TCP-IP 4계층",
      link: {
        type: "generated-index",
      },
      collapsed: true,
      items: [
        {
          type: "autogenerated",
          dirName: "네트워크/OSI 7계층과 TCP-IP 4계층",
        },
      ],
    },
    {
      type: "category",
      label: "TCP / UDP",
      link: {
        type: "generated-index",
      },
      collapsed: true,
      items: [
        {
          type: "autogenerated",
          dirName: "네트워크/TCP-UDP",
        },
      ],
    },
    {
      type: "category",
      label: "DNS",
      link: {
        type: "generated-index",
      },
      collapsed: true,
      items: [
        {
          type: "autogenerated",
          dirName: "네트워크/DNS",
        },
      ],
    },
    {
      type: "category",
      label: "웹브라우저 동작방식",
      link: {
        type: "generated-index",
      },
      collapsed: true,
      items: [
        {
          type: "autogenerated",
          dirName: "네트워크/웹브라우저 동작방식",
        },
      ],
    },
    {
      type: "category",
      label: "HTTP Method",
      link: {
        type: "generated-index",
      },
      collapsed: true,
      items: [
        {
          type: "autogenerated",
          dirName: "네트워크/HTTP Method",
        },
      ],
    },
    {
      type: "category",
      label: "HTTP / HTTPS",
      link: {
        type: "generated-index",
      },
      collapsed: true,
      items: [
        {
          type: "autogenerated",
          dirName: "네트워크/HTTP-HTTPS",
        },
      ],
    },
    {
      type: "category",
      label: "RESTful",
      link: {
        type: "generated-index",
      },
      collapsed: true,
      items: [
        {
          type: "autogenerated",
          dirName: "네트워크/RESTful",
        },
      ],
    },
    {
      type: "category",
      label: "쿠키 / 세션 / 웹스토리지",
      link: {
        type: "generated-index",
      },
      collapsed: true,
      items: [
        {
          type: "autogenerated",
          dirName: "네트워크/쿠키-세션-웹스토리지",
        },
      ],
    },
    {
      type: "category",
      label: "세션 / 토큰 기반 인증",
      link: {
        type: "generated-index",
      },
      collapsed: true,
      items: [
        {
          type: "autogenerated",
          dirName: "네트워크/세션-토큰 기반 인증",
        },
      ],
    },
    {
      type: "category",
      label: "JWT (JSON Web Token)",
      link: {
        type: "generated-index",
      },
      collapsed: true,
      items: [
        {
          type: "autogenerated",
          dirName: "네트워크/JWT",
        },
      ],
    },
    {
      type: "category",
      label: "OAuth",
      link: {
        type: "generated-index",
      },
      collapsed: true,
      items: [
        {
          type: "autogenerated",
          dirName: "네트워크/OAuth",
        },
      ],
    },
  ],
  Typescript: [
    "Typescript Intro",
    {
      type: "category",
      label: "1장 | 타입스크립트 알아보기",
      link: {
        type: "generated-index",
      },
      collapsed: true,
      items: [
        {
          type: "autogenerated",
          dirName: "Typescript/1장 타입스크립트 알아보기",
        },
      ],
    },
    {
      type: "category",
      label: "2장 | 타입 시스템",
      link: {
        type: "generated-index",
      },
      collapsed: true,
      items: [
        {
          type: "autogenerated",
          dirName: "Typescript/2장 타입 시스템",
        },
      ],
    },
    {
      type: "category",
      label: "3장 | 타입 추론",
      link: {
        type: "generated-index",
      },
      collapsed: true,
      items: [
        {
          type: "autogenerated",
          dirName: "Typescript/3장 타입 추론",
        },
      ],
    },
    {
      type: "category",
      label: "4장 | 타입 설계",
      link: {
        type: "generated-index",
      },
      collapsed: true,
      items: [
        {
          type: "autogenerated",
          dirName: "Typescript/4장 타입 설계",
        },
      ],
    },
    {
      type: "category",
      label: "5장 | any 다루기",
      link: {
        type: "generated-index",
      },
      collapsed: true,
      items: [
        {
          type: "autogenerated",
          dirName: "Typescript/5장 any 다루기",
        },
      ],
    },
  ],
  React: [
    "React Intro",
    {
      type: "category",
      label: "React Hooks",
      link: {
        type: "generated-index",
      },
      collapsed: true,
      items: [
        {
          type: "autogenerated",
          dirName: "React/React Hooks",
        },
      ],
    },
    {
      type: "category",
      label: "React Component",
      link: {
        type: "generated-index",
      },
      collapsed: true,
      items: [
        {
          type: "autogenerated",
          dirName: "React/React Component",
        },
      ],
    },
    {
      type: "category",
      label: "React APIs",
      link: {
        type: "generated-index",
      },
      collapsed: true,
      items: [
        {
          type: "autogenerated",
          dirName: "React/React APIs",
        },
      ],
    },
  ],
  Javascript: [
    "Javascript Intro",
    {
      type: "category",
      label: "키워드 공부하기",
      link: {
        type: "generated-index",
      },
      collapsed: true,
      items: [
        {
          type: "autogenerated",
          dirName: "Javascript/keyword",
        },
      ],
    },
    {
      type: "category",
      label: "면접 질문 모음",
      link: {
        type: "generated-index",
      },
      collapsed: true,
      items: [
        {
          type: "autogenerated",
          dirName: "Javascript/면접 질문 모음",
        },
      ],
    },
  ],
};

module.exports = sidebars;
