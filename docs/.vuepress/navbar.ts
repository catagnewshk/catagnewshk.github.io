import { navbar } from "vuepress-theme-hope";

export default navbar([
    {
        text: "自然環境",
        prefix: "/nature/",
        children: ["tropical-cyclone.md","landside.md","flooding.md","heat-wave.md","cold-snap.md","earthquake.md",],
      },
      {
        text: "文化節慶",
        prefix: "/culture/",
        children: ["dragon-boat-festival.md","yu-lan-festival.md",],
      },
]);
