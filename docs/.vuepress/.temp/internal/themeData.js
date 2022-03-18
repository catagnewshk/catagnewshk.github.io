export const themeData = {
  "darkMode": false,
  "lastUpdated": true,
  "lastUpdatedText": "更新",
  "contributors": false,
  "contributorsText": "編輯",
  "navbar": [
    {
      "text": "簡介",
      "link": "/about/"
    },
    {
      "text": "自然",
      "children": [
        "/natural-disaster/tropical-cyclone/"
      ]
    },
    {
      "text": "文化",
      "children": [
        "/archaeology/",
        "/philosophy-and-belief/",
        "/festival/",
        "/art/",
        "/custom-and-ritual/"
      ]
    },
    {
      "text": "政治",
      "children": [
        "/law/",
        "/government/"
      ]
    },
    {
      "text": "經濟",
      "children": [
        "/economic-activity/agriculture/",
        "/economic-activity/fishery/",
        "/economic-activity/manufacturing/",
        "/economic-activity/tourism/",
        "/bank/"
      ]
    },
    {
      "text": "社會",
      "children": [
        "/infrastructure/",
        "/public-transportation/",
        "/public-health/",
        "/housing/",
        "/education/",
        "/charity/",
        "/sport/",
        "/movement/"
      ]
    },
    {
      "text": "補充",
      "children": [
        "/ad/",
        "/outside-hong-kong/",
        "/research-info/"
      ]
    }
  ],
  "sidebar": {},
  "locales": {
    "/": {
      "selectLanguageName": "English"
    }
  },
  "logo": null,
  "repo": null,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "sidebarDepth": 2,
  "editLink": true,
  "editLinkText": "Edit this page",
  "notFound": [
    "There's nothing here.",
    "How did we get here?",
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links."
  ],
  "backToHome": "Take me home",
  "openInNewWindow": "open in new window",
  "toggleDarkMode": "toggle dark mode",
  "toggleSidebar": "toggle sidebar"
}

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
