module.exports = {
    base: '/',
    lang: 'zh-Hant',
    title: '香港新聞類編',
    description: '舊報紙，新鮮事。',
    head: [
      [
        "script",
        {
          "data-ad-client": "ca-pub-8975507583219124",
          async: true,
          src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        }
      ]
    ],
    markdown: {
      externalLinks: 
      { target: '_blank', rel: 'nofollow noopener noreferrer' }
    },
    plugins: [
      [
        '@vuepress/plugin-google-analytics',
        {
          id: 'G-B0Q8NSDE8V',
        },
      ],
      [
        '@vuepress/plugin-search',
        {
          placeholder: '搜索',
        },
      ],
    ],
    themeConfig: {
      darkMode: false,
      lastUpdated: true,
      lastUpdatedText: '更新',
      contributors: true,
      contributorsText: '編輯',
      navbar:[
        {
          text: '自然',
          children: [
            '/natural-disaster/tropical-cyclone/',
          ],
        },        
        {
          text: '文化',
          children: [
            '/archaeology/', 
            '/philosophy-and-belief/',
            '/festival/',
            '/art/',
            '/custom-and-ritual/',
//            '/museum/',
//            '/library/',
          ],
        },
        {
          text: '政治',
          children: [
            '/law/',
            '/government/',
          ],
        },
        {
          text: '經濟',
          children: [
            '/economic-activity/agriculture/',
            '/economic-activity/fishery/',
            '/economic-activity/manufacturing/',
            '/economic-activity/tourism/',
            '/bank/',
          ],
        },
        {
          text: '社會',
          children: [
            '/infrastructure/',
            '/public-transportation/',
            '/public-health/', 
            '/housing/',
            '/education/',
            '/charity/',
            '/sport/',
            '/movement/',
          ],
        },
        {
          text: '補充',
          children: [
            '/ad/',
            '/outside-hong-kong/',
            '/research-info/',
          ],
        },
    ],
      sidebar: {
    }
  }
}