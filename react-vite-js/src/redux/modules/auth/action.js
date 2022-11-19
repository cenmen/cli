import * as types from '@/redux/mutation-types';

export const setTokenInfo = tokenInfo => ({
	type: types.SET_TOKEN_INFO,
	tokenInfo
});

export const setAuthInfo = authInfo => ({
	type: types.SET_AUTH_INFO,
	authInfo
});

export const setUserInfo = userInfo => ({
	type: types.SET_USER_INFO,
	userInfo
});

export const setCurrentRouter = currentRouter => ({
	type: types.SET_CURRENT_ROUTER,
	currentRouter
});
