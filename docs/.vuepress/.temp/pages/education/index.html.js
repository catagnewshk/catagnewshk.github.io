export const data = {
  "key": "v-92504580",
  "path": "/education/",
  "title": "教育",
  "lang": "zh-Hant",
  "frontmatter": {
    "lang": "zh-Hant",
    "title": "教育",
    "sidebar": "auto"
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "院校",
      "slug": "院校",
      "children": [
        {
          "level": 3,
          "title": "小學",
          "slug": "小學",
          "children": []
        },
        {
          "level": 3,
          "title": "中學",
          "slug": "中學",
          "children": []
        },
        {
          "level": 3,
          "title": "大學",
          "slug": "大學",
          "children": []
        }
      ]
    }
  ],
  "git": {
    "updatedTime": 1644576147000
  },
  "filePathRelative": "education/README.md"
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
