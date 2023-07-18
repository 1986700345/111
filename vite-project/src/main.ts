import { createApp } from 'vue'
import './style.css'
import ElementPlus from "element-plus";
// element icons
import * as Icons from "@element-plus/icons-vue";
// vue Router
import router from "@/routers";
// pinia store
import pinia from "@/stores";
import App from './App.vue'
const app=createApp(App)
Object.keys(Icons).forEach(key => {
	app.component(key, Icons[key as keyof typeof Icons]);
});
app.use(router).use(pinia).use(ElementPlus).mount('#app');
