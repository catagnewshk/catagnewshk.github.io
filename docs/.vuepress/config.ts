import { defineUserConfig } from "vuepress";
import theme from "./theme";
const { googleAnalyticsPlugin } = require('@vuepress/plugin-google-analytics')

export default defineUserConfig({
  lang: "zh-TW",
  title: "香港新聞類編",
  description: "",
  base: "/",
  head: [
    [
      "script",
      {
        "data-ad-client": "ca-pub-8975507583219124",
        async: true,
        src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
      }
    ]
  ],
  plugins: [
    googleAnalyticsPlugin({
      id: 'G-31TGK3JB6M',
    }),
  ],
  theme,
});
