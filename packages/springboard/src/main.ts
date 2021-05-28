import { createApp } from 'vue'
import App from './App.vue'

declare global {
  interface Window {
    App: {
      start: () => void
    }
  }
}

window.App = {
  start () {
    const app = createApp(App)

    app.mount('#app')
  },
}
