export const categoryMap = {"category":{"/":{"path":"/category/","map":{"文化":{"path":"/category/%E6%96%87%E5%8C%96/","keys":["v-2df2e028","v-82c62496","v-57af7cfa","v-f323cf82","v-e9d6993a","v-4ea50135"]},"經濟":{"path":"/category/%E7%B6%93%E6%BF%9F/","keys":["v-dd93d578","v-ca9bc284","v-12154bf2"]},"自然":{"path":"/category/%E8%87%AA%E7%84%B6/","keys":["v-5fdeaedf","v-33e8c973","v-6040f3da","v-0a0ff5dc","v-7f031dc8","v-2d2ec0e9","v-57e41c04","v-372bd042"]},"製造業":{"path":"/category/%E8%A3%BD%E9%80%A0%E6%A5%AD/","keys":["v-6261f914"]}}}},"tag":{"/":{"path":"/tag/","map":{}}}}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateBlogCategory) {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ categoryMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap)
  })
}
