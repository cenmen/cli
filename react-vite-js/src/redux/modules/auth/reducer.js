import produce from 'immer';
import * as types from '@/redux/mutation-types';

const authState = {
	tokenInfo: {},
	authInfo: {},
	userInfo: ''
};

// auth reducer
const auth = (state = authState, action) =>
	produce(state, draftState => {
		switch (action.type) {
			case types.SET_TOKEN_INFO:
				draftState.tokenInfo = action.tokenInfo;
				break;
			case types.SET_AUTH_INFO:
				draftState.authInfo = action.authInfo;
				break;
			default:
				return draftState;
		}
	});

export default auth;
