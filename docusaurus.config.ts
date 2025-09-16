import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import type { PluginOptions } from "@easyops-cn/docusaurus-search-local";
import { themes as prismThemes } from "prism-react-renderer";

const ORG = "MohammadAObed";
const REPO = "docs-config";
const SITE_URL = "https://MohammadAObed";

const config: Config = {
  title: REPO,
  tagline: "One package to rule ESLint, TypeScript, and Prettier — plus tiny CLIs",
  favicon: "img/favicon.ico",
  future: {
    v4: true,
  },
  url: SITE_URL,
  baseUrl: "/",
  organizationName: ORG,
  projectName: REPO,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          editUrl: `https://github.com/${ORG}/${REPO}/tree/main/`,
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          editUrl: `https://github.com/${ORG}/${REPO}/tree/main/`,
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: "img/social-card.png",
    navbar: {
      title: REPO,
      logo: {
        alt: REPO + " logo",
        src: "img/logo.png",
      },
      items: [
        { type: "docSidebar", sidebarId: "tutorialSidebar", position: "left", label: "Docs" },
        { to: "/blog", label: "Blog", position: "left" },
        {
          href: `https://github.com/${ORG}`,
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        //Delete all existing links, and add the following
        {
          title: "docs",
          items: [{ label: "Getting Started", to: "/docs/get-started" }],
        },
        {
          title: "More",
          items: [
            { label: "Blog", to: "/blog" },
            { label: "GitHub", href: `https://github.com/${ORG}` },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} OPMO, Inc. Built with Docusaurus.`,
    },
    colorMode: {
      defaultMode: "dark",
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
      } satisfies PluginOptions,
    ],
  ],
};

export default config;
