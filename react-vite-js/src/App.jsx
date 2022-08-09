import { Suspense } from 'react';
import { Provider } from 'react-redux';
import zhCN from 'antd/es/locale/zh_CN';
import { ConfigProvider, Spin } from 'antd';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '@/redux';
import Router from '@/components/Router';

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
