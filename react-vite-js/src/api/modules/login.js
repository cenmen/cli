// import http from '@/api';
// import api from '../api';

/**
 * @namespace 登录模块
 */

// * 用户登录接口
export const login = params => {
	const random = Math.ceil(Math.random() * 1000);
	const activeTime = Date.now() + 1000 * 60 * 5;
	return { token: `tokenTest${random}`, activeTime };
	// return http.post(api.login, params);
};

// * 获取权限列表
export const getAuthInfo = () => {
	const path = ['/weather', '/weather/list', '/weather/detail'];
	const authInfo = { path };
	return Promise.resolve(authInfo);
};
