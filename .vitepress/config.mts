import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Mobile Engineer Battlepass',
  description: 'Live API documentation powered by FastAPI & OpenAPI',
  base: '/docs-site/',
  ignoreDeadLinks: true,
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: tag => tag === 'redoc'
      }
    }
  },

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/overview' },
    ],
    
  },
})
