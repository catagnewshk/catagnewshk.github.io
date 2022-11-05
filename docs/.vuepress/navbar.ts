import { navbar } from "vuepress-theme-hope";

export default navbar([
      {
        text: "自然",
        prefix: "/",
        children: ["tropical-cyclone",],
      },
      {
        text: "文化",
        prefix: "/",
        children: ["archaeology",],
      },
      {
        text: "教育",
        prefix: "/",
        children: ["higher-education",],
      },
      {
        text: "關於",
        link: "/about.md",
      },     
]);
