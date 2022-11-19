import produce from 'immer';
import * as types from '@/redux/mutation-types';

const authState = {
	tokenInfo: {},
	authInfo: {},
	userInfo: {},
	currentRouter: null
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
			case types.SET_USER_INFO:
				draftState.userInfo = action.userInfo;
				break;
			case types.SET_CURRENT_ROUTER:
				draftState.currentRouter = action.currentRouter;
				break;
			default:
				return draftState;
		}
	});

export default auth;
