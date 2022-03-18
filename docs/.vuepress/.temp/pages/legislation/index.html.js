export const data = {
  "key": "v-3c2433f2",
  "path": "/legislation/",
  "title": "立法",
  "lang": "zh-Hant",
  "frontmatter": {
    "lang": "zh-Hant",
    "title": "立法",
    "sidebar": "auto"
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "條例",
      "slug": "條例",
      "children": []
    }
  ],
  "git": {
    "updatedTime": null
  },
  "filePathRelative": "legislation/README.md"
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
