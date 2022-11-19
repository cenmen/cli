import produce from 'immer';
import * as types from '@/redux/mutation-types';

const layoutState = {
	isCollapse: false,
	currentTabList: []
};

const layout = (state = layoutState, action) =>
	produce(state, draftState => {
		switch (action.type) {
			case types.UPDATE_COLLAPSE:
				draftState.isCollapse = action.isCollapse;
				break;
			case types.SET_CURRENT_TAB_LIST:
				draftState.currentTabList = action.tabList;
				break;
			default:
				return draftState;
		}
	});

export default layout;
