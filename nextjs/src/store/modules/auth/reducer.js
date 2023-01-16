import { ACTION_TYPES } from '@/store/types';

const initialState = {
	authInfo: {},
};

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case ACTION_TYPES.UPDATE_AUTH_INFO:
			return { ...state, authInfo: action.payload.authInfo };
		default:
			return state;
	}
}
