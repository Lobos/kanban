import { createApp } from 'vue'
import App from './App.vue'
import registerUI from './ui'
import router from './router'
import '@/assets/normalize.min.css'

const app = createApp(App)
registerUI(app)

app.use(router).mount('#app')
