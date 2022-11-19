import * as types from '@/redux/mutation-types';

export const updateCollapse = isCollapse => ({
	type: types.UPDATE_COLLAPSE,
	isCollapse
});

export const setCurrentTabList = tabList => ({
	type: types.SET_CURRENT_TAB_LIST,
	tabList
});
