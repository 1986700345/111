import { createApp } from 'vue'
import './style.css'
import ElementPlus from "element-plus";
// element icons
import * as Icons from "@element-plus/icons-vue";
import App from './App.vue'
const app=createApp(App)
Object.keys(Icons).forEach(key => {
	app.component(key, Icons[key as keyof typeof Icons]);
});
app.use(ElementPlus).mount('#app');
