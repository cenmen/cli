import { createApp } from 'vue';
import Antd from 'ant-design-vue';
import { createPinia } from 'pinia';
import piniaPluginPersistedState from 'pinia-plugin-persistedstate';
import './styles/tailwind.css';
import 'ant-design-vue/dist/antd.css';
import App from './App.vue';
import { router } from './router';

const pinia = createPinia();
pinia.use(piniaPluginPersistedState);
const app = createApp(App);
app.use(pinia);
app.use(Antd);
app.use(router);
app.mount('#app');
