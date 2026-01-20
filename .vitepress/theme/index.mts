import DefaultTheme from 'vitepress/theme'
import Redoc from 'redoc'
import ScalarApi from '../components/ScalarApi.vue'


export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
        if (typeof window !== 'undefined') {
      const script = document.createElement('script')
      script.src = 'https://cdn.redoc.ly/redoc/latest/bundles/redoc.standalone.js'
      document.body.appendChild(script)
    }
  },
}
