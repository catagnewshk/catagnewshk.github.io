export const categoryMap = {"category":{"/":{"path":"/category/","map":{"自然":{"path":"/category/%E8%87%AA%E7%84%B6/","keys":["v-5fdeaedf","v-82c62496","v-33e8c973","v-6040f3da","v-7f031dc8","v-2d2ec0e9","v-372bd042"]}}}},"tag":{"/":{"path":"/tag/","map":{}}}}

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
