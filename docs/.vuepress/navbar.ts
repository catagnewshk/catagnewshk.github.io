import { navbar } from "vuepress-theme-hope";

export default navbar([
    {
        text: "自然災害",
        prefix: "/natural-disaster/",
        children: ["tropical-cyclone.md","flooding.md","landside.md","heat-wave.md","cold-snap.md","earthquake.md",],
      },
]);
