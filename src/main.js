import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import request from './utils/request'

console.log('vue3中环境变量：', import.meta.env);

/**
 * 创建实例对象
 * 配置全局可调用的请求对象
 * 挂载插件
 */
const app = createApp(App)
app.config.globalProperties.$request = request
app.use(ElementPlus)
  .use(router)
  .mount('#app')
