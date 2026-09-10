// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

const isVercel = process.env.VERCEL === '1';
const vercelHost = process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'GanzSchool Materials',
  tagline: 'Everything you need',
  favicon: 'img/favicon.ico',

  // GitHub Pagesen marad a /Materials/ base path, Vercelen pedig a domain gyökeréről fut.
  url: isVercel && vercelHost ? `https://${vercelHost}` : 'https://ganzschool.github.io',
  baseUrl: isVercel ? '/' : '/Materials/',

  // GitHub pages deployment config.
  organizationName: 'GanzSchool',
  projectName: 'Materials',
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css',
      type: 'text/css',
    },
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/GanzSchool/Materials/edit/main/',
          remarkPlugins: [require('remark-math')],
          rehypePlugins: [require('rehype-katex')],
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://github.com/GanzSchool/Materials/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'GanzSchool',

        items: [
          {
            type: 'docSidebar',
            sidebarId: 'mySidebar',
            position: 'left',
            label: 'Materials',
          },
          { to: '/blog', label: 'Blogg', position: 'left' },
          {
            href: 'https://github.com/GanzSchool/Materials',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Bevezető',
                to: '/docs/Webprogramozás/Bevezető',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/GanzSchool/Materials',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} GanzSchool. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
