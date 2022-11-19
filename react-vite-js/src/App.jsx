import moment from 'moment';
import { Suspense } from 'react';
import { Provider } from 'react-redux';
import { ConfigProvider, Spin } from 'antd';
import { PersistGate } from 'redux-persist/integration/react';
import zhCN from 'antd/es/locale/zh_CN';
import 'moment/dist/locale/zh-cn';
import { store, persistor } from '@/redux';
import Router from '@/layout/Router';
moment.locale('zh-cn');

const App = () => {
	return (
		<ConfigProvider locale={zhCN}>
			<Provider store={store}>
				<PersistGate persistor={persistor}>
					<Suspense fallback={<Spin size='large' />}>
						<Router />
					</Suspense>
				</PersistGate>
			</Provider>
		</ConfigProvider>
	);
};

export default App;
