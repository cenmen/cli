import reduxPromise from 'redux-promise';
import { applyMiddleware } from 'redux';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import { legacy_createStore as createStore, combineReducers, compose } from 'redux';
import authReducer from './modules/auth/reducer';
import layoutReducer from './modules/layout/reducer';
import heroReducer from './modules/hero/reducer';

// redux 根持久化配置
const rootPersistConfig = {
	key: 'redux-state',
	storage: storage,
	whitelist: []
};

// redux authReducer 持久化配置
const authPersistConfig = {
	key: 'auth',
	storage: storage,
	whitelist: ['tokenInfo', 'authInfo', 'userInfo'] // 缓存某些键
};

// redux layoutReducer 持久化配置
const layoutPersistConfig = {
	key: 'layout',
	storage: storage,
	whitelist: ['isCollapse', 'currentTabList'] // 缓存某些键
};

const rootReducer = combineReducers({
	auth: persistReducer(authPersistConfig, authReducer),
	layout: persistReducer(layoutPersistConfig, layoutReducer),
	hero: heroReducer
});

const persistReducerConfig = persistReducer(rootPersistConfig, rootReducer);

// 开启 redux-devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// 使用 redux 中间件
const middleWares = applyMiddleware(reduxPromise);

// 创建 store
const store = createStore(persistReducerConfig, composeEnhancers(middleWares));

// 创建持久化 store
const persistor = persistStore(store);

export { store, persistor };
