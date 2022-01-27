import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

console.log('vue3中环境变量：', import.meta.env);

const app = createApp(App)
app.use(ElementPlus)
  .use(router)
  .mount('#app')
