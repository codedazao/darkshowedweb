import { createApp } from 'vue'
import "./style/global.css"
import App from './App.vue'
import router from './router/pageRouter'

const app = createApp(App)
app.use(router)
app.mount('#app')
