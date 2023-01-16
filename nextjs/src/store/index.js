import { legacy_createStore as createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { HYDRATE, createWrapper } from 'next-redux-wrapper';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { IS_PROD, IS_BROWSER } from '@/config/env';
import countReducer from './modules/count/reducer';
import authReducer from './modules/auth/reducer';
import createWebStorage from 'redux-persist/lib/storage/createWebStorage';

const createNoopStorage = () => {
	return {
		getItem(_key) {
			return Promise.resolve(null);
		},
		setItem(_key, value) {
			return Promise.resolve(value);
		},
		removeItem(_key) {
			return Promise.resolve();
		},
	};
};

const combinedReducer = reducer => (state, action) => {
	if (action.type === HYDRATE) {
		const nextState = {
			...state,
			...action.payload,
		};
		if (state.count.number) nextState.count.count = state.count.count;
		return nextState;
	} else {
		return reducer(state, action);
	}
};

const storage = typeof window !== 'undefined' ? createWebStorage('local') : createNoopStorage();

const composeEnhancers = !IS_PROD ? composeWithDevTools : compose;
const middleWares = applyMiddleware(thunk);

const makeStore = () => {
	if (!IS_BROWSER) {
		//If it's on server side, create a store
		const reducer = combineReducers({
			auth: authReducer,
			count: countReducer,
		});

		return createStore(combinedReducer(reducer), composeEnhancers(middleWares));
	} else {
		//If it's on client side, create a store which will persist
		const { persistStore, persistReducer } = require('redux-persist');

		// redux 根持久化配置
		const rootPersistConfig = {
			key: 'redux-state',
			storage,
			whitelist: [],
		};

		// redux authReducer 持久化配置
		const authPersistConfig = {
			key: 'auth',
			storage,
			whitelist: ['authInfo'], // 缓存某些键
		};

		const reducer = combineReducers({
			auth: persistReducer(authPersistConfig, authReducer),
			count: countReducer,
		});

		const persistedReducer = persistReducer(rootPersistConfig, combinedReducer(reducer)); // Create a new reducer with our existing reducer

		const store = createStore(persistedReducer, composeEnhancers(middleWares)); // Creating the store again

		store.__persistor = persistStore(store); // This creates a persistor object & push that persisted object to .__persistor, so that we can avail the persistability feature

		return store;
	}
};

export const wrapper = createWrapper(makeStore);
