import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar";
import sidebar from "./sidebar";

export default hopeTheme({
  hostname: "https://newshk.github.io",
  themeColor: false,
  darkmode: "disable",
  fullscreen: false,
  contributors: false,
  author: {
    name: "NG, Kinchung",
    url: "https://newshk.github.io",
  },
  iconAssets: "",
  logo: "/logo.svg",
  navbar: navbar,
  sidebar: sidebar,
  footer: "@ HKCI",
  displayFooter: true,
  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],
  encrypt: {
    config: {
      "/guide/encrypt.html": ["1234"],
    },
  },

  plugins: {
    blog: {
      autoExcerpt: true,
    },

    mdEnhance: {
//      enableAll: true,
      footnote: true,
      lazyLoad: true,
      sup: true,
      sub: true,
      mark: true,
      container: true,
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
    },
  },
});
