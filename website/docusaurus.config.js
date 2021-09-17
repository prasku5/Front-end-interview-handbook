module.exports = {
  title: 'Front End Interview Handbook',
  tagline:
    'Almost complete answers to "Front-end Job Interview Questions" which you can use to interview potential candidates, test yourself or completely ignore',
  url: 'https://frontendinterviewhandbook.com',
  baseUrl: '/',
  trailingSlash: true,
  favicon: 'img/favicon.png',
  organizationName: 'yangshun',
  projectName: 'front-end-interview-handbook',
  onBrokenLinks: 'ignore',
  themeConfig: {
    prism: {
      theme: require('prism-react-renderer/themes/github'),
      darkTheme: require('prism-react-renderer/themes/dracula'),
    },
    navbar: {
      title: 'Front End Interview Handbook',
      logo: {
        alt: 'Front End Interview Handbook Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          label: 'Translations',
          to: '#', // "fake" link
          position: 'right',
          items: [
            {
              label: 'English',
              to: 'en/html-questions',
              activeBasePath: 'en',
            },
            {
              label: '简体中文',
              to: 'zh/html-questions',
              activeBasePath: 'zh',
            },
            {
              label: 'Español',
              to: 'es/html-questions',
              activeBasePath: 'es',
            },
            {
              label: '日本語',
              to: 'jp/html-questions',
              activeBasePath: 'jp',
            },
            {
              label: '한국어',
              to: 'kr/html-questions',
              activeBasePath: 'kr',
            },
            {
              label: 'Polski',
              to: 'pl/html-questions',
              activeBasePath: 'pl',
            },
            {
              label: 'Português',
              to: 'pr/html-questions',
              activeBasePath: 'pr',
            },
            {
              label: 'Русский',
              to: 'ru/html-questions',
              activeBasePath: 'ru',
            },
            {
              label: 'Tagalog',
              to: 'tl/html-questions',
              activeBasePath: 'tl',
            },
          ],
        },
        {to: 'blog', label: 'Blog', position: 'right'},
        {
          href: 'https://github.com/yangshun/front-end-interview-handbook',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://twitter.com/yangshunz',
          label: 'Twitter',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Yangshun Tay. Built with Docusaurus.`,
    },
    gtag: {
      trackingID: 'UA-44622716-3',
    },
    algolia: {
      apiKey: '6c13c369e8d9809cebb5c51330c914c3',
      indexName: 'frontendinterviewhandbook',
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: '../contents',
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/yangshun/front-end-interview-handbook/edit/master/contents/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  scripts: [
    {
      src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4984084888641317',
      crossorigin: 'anonymous',
      async: true,
    },
  ],
};
