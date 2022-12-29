import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createPersistedState } from '@/plugins/piniaPersistedState';

import './app.less';

const App = createApp({
	async onLaunch() {},
});
const pinia = createPinia();
pinia.use(createPersistedState());
App.use(pinia);

export default App;
