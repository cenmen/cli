import * as types from '@/redux/mutation-types';

export const updateCollapse = isCollapse => ({
	type: types.UPDATE_COLLAPSE,
	isCollapse
});

export const setMenuList = menuList => ({
	type: types.SET_MENU_LIST,
	menuList
});

export const setBreadcrumbList = breadcrumbList => ({
	type: types.SET_BREADCRUMB_LIST,
	breadcrumbList
});
