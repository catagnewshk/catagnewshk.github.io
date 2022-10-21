export const themeData = JSON.parse("{\"blog\":{},\"encrypt\":{},\"pure\":false,\"darkmode\":\"disable\",\"themeColor\":false,\"fullscreen\":false,\"locales\":{\"/\":{\"blog\":{},\"repoDisplay\":true,\"navbarIcon\":true,\"navbarAutoHide\":\"mobile\",\"hideSiteNameonMobile\":true,\"sidebar\":{\"/nature/\":[\"tropical-cyclone\",\"flooding\",\"landside\",\"heat-wave\",\"cold-snap\",\"earthquake\"],\"/culture/\":[\"archaeology\",\"dragon-boat-festival\",\"jiao-festival\",\"tin-hau-festival\",\"yu-lan-festival\"],\"/economy/\":[\"fishery\",\"manufacturing\",\"tourism\"]},\"sidebarIcon\":true,\"headerDepth\":2,\"lang\":\"zh-TW\",\"navbarLocales\":{\"langName\":\"繁體中文\",\"selectLangAriaLabel\":\"選擇語言\"},\"metaLocales\":{\"author\":\"作者\",\"date\":\"寫作日期\",\"origin\":\"原創\",\"views\":\"訪問量\",\"category\":\"分類\",\"tag\":\"標籤\",\"readingTime\":\"閱讀時間\",\"words\":\"字數\",\"toc\":\"此頁內容\",\"prev\":\"上一頁\",\"next\":\"下一頁\",\"lastUpdated\":\"上次編輯於\",\"contributors\":\"貢獻者\",\"editLink\":\"編輯此頁\"},\"blogLocales\":{\"article\":\"文章\",\"articleList\":\"文章列表\",\"category\":\"分類\",\"tag\":\"標籤\",\"timeline\":\"時間軸\",\"timelineTitle\":\"昨日不在\",\"all\":\"全部\",\"intro\":\"個人介紹\",\"star\":\"收藏\",\"slides\":\"幻燈片\",\"encrypt\":\"加密\"},\"paginationLocales\":{\"prev\":\"上一頁\",\"next\":\"下一頁\",\"navigate\":\"跳轉到\",\"action\":\"前往\",\"errorText\":\"請輸入 1 到 $page 之前的頁碼！\"},\"outlookLocales\":{\"themeColor\":\"主題色\",\"darkmode\":\"主題模式\",\"fullscreen\":\"全屏\"},\"encryptLocales\":{\"iconLabel\":\"頁面已加密\",\"placeholder\":\"輸入密碼\",\"remember\":\"記憶密碼\",\"errorHint\":\"請輸入正確密碼\"},\"routeLocales\":{\"404msg\":[\"這裡什麼也沒有\",\"我們是怎麼來到這兒的？\",\"這 是 四 零 四 !\",\"看起来你訪問了一個失效的鏈結\"],\"back\":\"返回上一頁\",\"home\":\"帶我回家\",\"openInNewWindow\":\"Open in new window\"},\"contributors\":false,\"author\":{\"name\":\"NG, Kinchung\",\"url\":\"https://newshk.github.io\"},\"logo\":\"/logo.svg\",\"navbar\":[{\"text\":\"自然環境\",\"prefix\":\"/nature/\",\"children\":[\"tropical-cyclone.md\",\"landside.md\",\"flooding.md\",\"heat-wave.md\",\"cold-snap.md\",\"earthquake.md\"]},{\"text\":\"文化節慶\",\"prefix\":\"/culture/\",\"children\":[\"dragon-boat-festival.md\",\"yu-lan-festival.md\"]},{\"text\":\"經濟活動\",\"prefix\":\"/economy/\",\"children\":[\"fishery.md\",\"manufacturing.md\",\"tourism\"]},{\"text\":\"關於\",\"link\":\"/about.md\"}],\"footer\":\"\",\"copyright\":\"NG, Kinchung @ Peking University\",\"displayFooter\":true,\"pageInfo\":[\"Category\",\"Author\",\"Original\",\"Date\",\"Tag\",\"ReadingTime\"]}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
