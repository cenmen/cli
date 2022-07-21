import * as types from '@/redux/mutation-types';
import { getAuthInfo } from '@/api/modules/login';

export const setTokenInfo = tokenInfo => ({
	type: types.SET_TOKEN_INFO,
	tokenInfo
});

export const setAuthInfo = authInfo => ({
	type: types.SET_AUTH_INFO,
	authInfo
});

export const setAuthInfoActionThunk = () => {
	return async dispatch => {
		const data = await getAuthInfo();
		dispatch({
			type: types.SET_AUTH_INFO,
			authInfo: data
		});
	};
};
