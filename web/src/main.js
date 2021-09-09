import { createApp } from 'vue'
import App from './App.vue'
import registerUI from './ui'
import router from './router'
import store from './store'
import registerComponents from './components'
import '@/assets/normalize.min.css'

const app = createApp(App)
registerUI(app)
registerComponents(app)

app.use(router).use(store).mount('#app')
