import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "DeskMini All in One",
  description: "A VitePress Site",
  base: "/",
  srcDir: "docs",

  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: [

      { text: "简介", link: '/index.md' },
      { text: 'PVE', link: '/pve.md' },
      { text: 'OpenWRT', link: '/openwrt.md' },
      { text: 'macOS', link: '/macos.md' }

    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/cofficlab' }
    ],

    editLink: {
      pattern: 'https://github.com/cofficlab/cofficlab.github.io/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },
  }
})
