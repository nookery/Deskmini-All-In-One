import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "DeskMini All in One",
  description: "A VitePress Site",
  base: "/Deskmini-All-In-One",
  srcDir: "docs",

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
