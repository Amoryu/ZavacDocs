import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
const app = createApp(App)
// element css
import "element-plus/dist/index.css";
import "element-plus/theme-chalk/dark/css-vars.css";


app.use(ElementPlus)
app.mount('#app')
