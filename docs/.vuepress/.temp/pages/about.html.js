export const data = {
  "key": "v-22a39d25",
  "path": "/about.html",
  "title": "簡介",
  "lang": "zh-Hant",
  "frontmatter": {
    "lang": "zh-Hant",
    "title": "簡介",
    "contributors": false,
    "lastUpdated": false
  },
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": 1644576147000
  },
  "filePathRelative": "about.md"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
