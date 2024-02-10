import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'My Smart Notes | Quick Reference Portal for Tech',
  tagline: 'Quick Reference Portal for Software Engineers',
  // favicon: 'images/favicon.ico',
  favicon: 'images/logo.svg',
  url: 'https://mysmartnotes.com',
  baseUrl: '/',
  organizationName: 'aishwaryD',
  projectName: 'aishwaryD.github.io',
  deploymentBranch: 'gh-pages',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve("./sidebars.js"),
          sidebarItemsGenerator({
            isCategoryIndex: defaultCategoryIndexMatcher,
            defaultSidebarItemsGenerator,
            ...args
          }) {
            return defaultSidebarItemsGenerator({
              ...args,
              isCategoryIndex() {
                return false;
              },
            });
          },
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-sitemap',
      {
        id: 'sitemap', // Assign a unique ID to the plugin instance
        changefreq: 'weekly',
        priority: 0.5,
        ignorePatterns: ['/tags/**'],
        filename: 'sitemap.xml',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'cheatsheets',
        path: 'cheatsheets',
        routeBasePath: 'cheatsheet',
        sidebarPath: require.resolve('./sidebars.js'),
        sidebarItemsGenerator({
          isCategoryIndex: defaultCategoryIndexMatcher,
          defaultSidebarItemsGenerator,
          ...args
        }) {
          return defaultSidebarItemsGenerator({
            ...args,
            isCategoryIndex() {
              return false;
            },
          });
        },
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'interviewqs',
        path: 'interviewqs',
        routeBasePath: 'interview-questions',
        sidebarPath: require.resolve('./sidebars.js'),
        sidebarItemsGenerator({
          isCategoryIndex: defaultCategoryIndexMatcher,
          defaultSidebarItemsGenerator,
          ...args
        }) {
          return defaultSidebarItemsGenerator({
            ...args,
            isCategoryIndex() {
              return false;
            },
          });
        },
      },
    ],
    '@docusaurus/theme-live-codeblock',//For Docusaurus Live Code Editor. Not for CodeMirror.
  ],
  
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
  ({
    liveCodeBlock: {
      playgroundPosition: 'bottom', //For Docusaurus Live Code Editor. Not for CodeMirror.
    },
    colorMode: {
      disableSwitch: true,
      defaultMode: 'dark',
    },
    image: 'images/logo.svg',
    navbar: {
      title: 'My Smart Notes',
      logo: {
        alt: 'My Smart Notes',
        src: 'images/logo.svg',
        srcDark: 'images/logo.svg',
      },
      items: [
        {
          type: "dropdown",
          label: "Explore Fundamentals",
          position: "left",
          items: [
            {
              type: "doc",
              docId: "categories/Computer Networks/voip",
              label: "Computer Networks",
            },
          ]
        },
        {
          type: "dropdown",
          label: "Grab Cheatsheets",
          position: "left",
          items: [
            {
              to: 'cheatsheet/rest-api',
              label: 'Backend',
              activeBaseRegex: `/cheatsheet/`,
            },
          ]
        },
        {
          type: "dropdown",
          label: "Crack Interviews",
          position: "left",
          items: [
            {
              to: 'interview-questions/most-asked-coding-questions',
              label: 'Coding Interview Questions',
              activeBaseRegex: `/interview-questions/`,
            },
          ]
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} My Smart Notes`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['java'],//For Docusaurus Live Code Editor. Not for CodeMirror.
    },
  }),
};

export default config;
