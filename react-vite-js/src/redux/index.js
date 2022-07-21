import reduxThunk from 'redux-thunk';
import { applyMiddleware } from 'redux';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import { legacy_createStore as createStore, combineReducers, compose } from 'redux';
import auth from './modules/auth/reducer';
import layout from './modules/layout/reducer';

const reducer = combineReducers({
	auth,
	layout
});

// redux 持久化配置
const persistConfig = {
	key: 'redux-state',
	storage: storage,
	whitelist: ['auth']
};
const persistReducerConfig = persistReducer(persistConfig, reducer);

// 开启 redux-devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// 使用 redux 中间件
const middleWares = applyMiddleware(reduxThunk);

// 创建 store
const store = createStore(persistReducerConfig, composeEnhancers(middleWares));

// 创建持久化 store
const persistor = persistStore(store);

export { store, persistor };
