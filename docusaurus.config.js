import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'My Smart Notes',
  tagline: 'Quick Reference Handbook for every Software Engineer',
  // favicon: 'images/favicon.ico',
  favicon: 'images/logo.svg',
  url: 'https://aishwaryD.github.io',
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
      '@docusaurus/plugin-content-docs',
      {
        id: 'projects',
        path: 'projects',
        routeBasePath: 'build',
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
  ],
  
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
  ({
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
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} My Smart Notes`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  }),
};

export default config;
