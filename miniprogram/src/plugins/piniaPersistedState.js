import { getStorageSync, setStorageSync } from '@tarojs/taro';

const hydrateStore = (store, { key }) => {
	try {
		const value = getStorageSync(key);
		if (value) store.$patch(value);
	} catch (error) {
		console.error('--> piniaPersistedState.hydrateStore', error);
	}
};

const persistState = (state, { key, paths }) => {
	try {
		if (!Array.isArray(paths)) return;
		const toStore = paths.reduce((total, cur) => (state[cur] ? { ...total, [cur]: state[cur] } : total), {});
		setStorageSync(key, toStore);
	} catch (error) {
		console.error('--> piniaPersistedState.persistState', error);
	}
};

export function createPersistedState() {
	return context => {
		const { options, store } = context;
		const { id, persist } = options;

		if (!persist) return;
		const currentId = `store_${id}`;
		const { paths } = persist;

		hydrateStore(store, { key: currentId });

		store.$subscribe(
			(_mutation, state) => {
				persistState(state, { key: currentId, paths });
			},
			{
				detached: true,
			}
		);
	};
}
