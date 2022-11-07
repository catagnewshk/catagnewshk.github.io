export const categoryMap = {"category":{"/":{"path":"/category/","map":{"廣告":{"path":"/category/%E5%BB%A3%E5%91%8A/","keys":["v-229fc57d"]},"文化":{"path":"/category/%E6%96%87%E5%8C%96/","keys":["v-83a8cd24","v-2df2e028","v-82c62496","v-57af7cfa","v-f323cf82","v-e9d6993a","v-4ea50135"]},"經濟":{"path":"/category/%E7%B6%93%E6%BF%9F/","keys":["v-dd93d578","v-ca9bc284","v-12154bf2"]},"公共衞生":{"path":"/category/%E5%85%AC%E5%85%B1%E8%A1%9E%E7%94%9F/","keys":["v-45b02480","v-3b907e4e"]},"自然":{"path":"/category/%E8%87%AA%E7%84%B6/","keys":["v-5fdeaedf","v-33e8c973","v-6040f3da","v-0a0ff5dc","v-7f031dc8","v-2d2ec0e9","v-57e41c04","v-372bd042"]},"社會意外":{"path":"/category/%E7%A4%BE%E6%9C%83%E6%84%8F%E5%A4%96/","keys":["v-2aa5dcec"]},"教育":{"path":"/category/%E6%95%99%E8%82%B2/","keys":["v-792f29fe","v-d54fea18","v-078fbed4","v-9bf9601c"]},"製造業":{"path":"/category/%E8%A3%BD%E9%80%A0%E6%A5%AD/","keys":["v-6261f914"]},"基建":{"path":"/category/%E5%9F%BA%E5%BB%BA/","keys":["v-1bd7655a","v-cd034fbc"]},"公共交通":{"path":"/category/%E5%85%AC%E5%85%B1%E4%BA%A4%E9%80%9A/","keys":["v-75aa3c26"]}}}},"tag":{"/":{"path":"/tag/","map":{"歷史":{"path":"/tag/%E6%AD%B7%E5%8F%B2/","keys":["v-2df2e028"]},"文化遺產":{"path":"/tag/%E6%96%87%E5%8C%96%E9%81%BA%E7%94%A2/","keys":["v-2df2e028"]},"古蹟":{"path":"/tag/%E5%8F%A4%E8%B9%9F/","keys":["v-2df2e028"]},"古跡":{"path":"/tag/%E5%8F%A4%E8%B7%A1/","keys":["v-2df2e028"]},"大學":{"path":"/tag/%E5%A4%A7%E5%AD%B8/","keys":["v-078fbed4"]},"學院":{"path":"/tag/%E5%AD%B8%E9%99%A2/","keys":["v-078fbed4"]},"大專":{"path":"/tag/%E5%A4%A7%E5%B0%88/","keys":["v-078fbed4"]},"專上":{"path":"/tag/%E5%B0%88%E4%B8%8A/","keys":["v-078fbed4"]},"傳統節慶":{"path":"/tag/%E5%82%B3%E7%B5%B1%E7%AF%80%E6%85%B6/","keys":["v-e9d6993a"]}}}}}

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
