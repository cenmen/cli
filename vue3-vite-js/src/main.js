import { createApp } from 'vue';
import Antd from 'ant-design-vue';
import { createPinia } from 'pinia';
import './styles/tailwind.css';
import 'ant-design-vue/dist/antd.css';
import App from './App.vue';
import { router } from './router';

const pinia = createPinia();
const app = createApp(App);
app.use(pinia);
app.use(Antd);
app.use(router);
app.mount('#app');
