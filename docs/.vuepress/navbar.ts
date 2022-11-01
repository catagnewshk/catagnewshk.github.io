import { navbar } from "vuepress-theme-hope";

export default navbar([
    {
        text: "自然環境",
        prefix: "/",
        children: ["tropical-cyclone.md","landside.md","flooding.md","heat-wave.md","cold-snap.md","earthquake.md",],
      },
      {
        text: "文化節慶",
        prefix: "/",
        children: ["dragon-boat-festival.md","yu-lan-festival.md",],
      },
      {
        text: "經濟活動",
        prefix: "/",
        children: ["fishery.md","manufacturing.md","tourism",],
      },
      {
        text: "關於",
        link: "/about.md",
      },     
]);
