import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "DeskMini All in One",
  description: "详细介绍如何将 DeskMini 310 改装成多功能服务器，包含 PVE、OpenWRT、群晖等系统的安装配置教程",
  base: "/Deskmini-All-In-One",
  srcDir: "docs",
  lang: 'zh-CN',
  head: [
    ['meta', { name: 'keywords', content: 'DeskMini 310, PVE, OpenWRT, NAS, 群晖, 服务器, 虚拟化' }],
    ['meta', { name: 'author', content: 'Nookery' }],
  ],

  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Coffic 工作室', link: 'https://cofficlab.github.io' },
      { text: '快易知', link: 'https://www.kuaiyizhi.cn' },
    ],

    sidebar: [

      { text: "简介", link: '/index.md' },
      { text: 'PVE', link: '/pve.md' },
      { text: 'OpenWRT', link: '/openwrt.md' },
      { text: 'macOS', link: '/macos.md' }

    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/nookery' }
    ],

    editLink: {
      pattern: 'https://github.com/nookery/Deskmini-All-In-One/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },
  }
})
