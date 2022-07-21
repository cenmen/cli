import produce from 'immer';
import * as types from '@/redux/mutation-types';

const layoutState = {
	isCollapse: false,
	menuList: [],
	breadcrumbList: []
};

const layout = (state = layoutState, action) =>
	produce(state, draftState => {
		switch (action.type) {
			case types.UPDATE_COLLAPSE:
				draftState.isCollapse = action.isCollapse;
				break;
			case types.SET_MENU_LIST:
				draftState.menuList = action.menuList;
				break;
			case types.SET_BREADCRUMB_LIST:
				draftState.breadcrumbList = action.breadcrumbList;
				break;
			default:
				return draftState;
		}
	});

export default layout;
