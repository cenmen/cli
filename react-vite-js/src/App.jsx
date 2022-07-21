import { Spin } from 'antd';
import { Suspense } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '@/redux';
import Router from '@/components/Router';

const App = () => {
	return (
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<Suspense fallback={<Spin size="large" />}>
					<Router />
				</Suspense>
			</PersistGate>
		</Provider>
	);
};

export default App;
