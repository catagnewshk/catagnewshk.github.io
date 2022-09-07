import { reveal, revealMarkdown, revealHighlight, revealMath, revealSearch, revealNotes, revealZoom } from "/Users/ngkinchung/Documents/GitHub/newshk.github.io/node_modules/vuepress-plugin-md-enhance/lib/client/reveal";

export const useReveal = () => [reveal(), revealMarkdown(), revealHighlight(), revealMath(), revealSearch(), revealNotes(), revealZoom()
];