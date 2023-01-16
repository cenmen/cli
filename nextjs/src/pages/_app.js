import { useStore } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { wrapper } from '@/store';
import { IS_BROWSER } from '@/config/env';
// import '../styles/globals.scss'

function App({ Component, pageProps }) {
	const store = useStore(state => state);
	return IS_BROWSER ? (
		<PersistGate persistor={store.__persistor}>
			<Component {...pageProps} />
		</PersistGate>
	) : (
		<PersistGate persistor={store}>
			<Component {...pageProps} />
		</PersistGate>
	);
}

export default wrapper.withRedux(App);
