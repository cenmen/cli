import { ACTION_TYPES } from '@/store/types';

const initialState = {
	count: 0,
};

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case ACTION_TYPES.UPDATE_COUNT:
			return { ...state, count: action.payload.count };
		default:
			return state;
	}
}
