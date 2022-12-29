import http from '../http';
import { ACGI_API } from '@/config/env';
import { APP_NAME } from '@/constants';

export const login = async params => {
	try {
		params.appName = APP_NAME;
		const data = await http.post(`${ACGI_API}/passport/account/login/wxMiniApp/v2`, params, { noAuth: true });
		return { data, isSuccess: true };
	} catch (error) {
		return { message: error?.message || '请求登录失败', isSuccess: false };
	}
};

export const fetchUserInfo = async () => {
	try {
		const data = await http.get(`${ACGI_API}/v2/member/account`);
		return { data, isSuccess: true };
	} catch (error) {
		return { message: error?.message || '请求获取用户信息失败', isSuccess: false };
	}
};
