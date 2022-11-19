import produce from 'immer';
import * as types from '@/redux/mutation-types';

const heroState = {
	currentHeroItem: null
};

const hero = (state = heroState, action) =>
	produce(state, draftState => {
		switch (action.type) {
			case types.SET_CURRENT_HERO_ITEM:
				draftState.currentHeroItem = action.payload;
				break;
			default:
				return draftState;
		}
	});

export default hero;
