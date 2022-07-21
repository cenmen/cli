import axios from 'axios';
// import { ResultEnum } from './helper/httpEnum';
// import { checkStatus } from './helper/checkStatus';
// import { AxiosCanceler } from './helper/axiosCancel';
// import { setTokenInfo } from '@/redux/modules/auth/action';
import { message } from 'antd';
import { store } from '@/redux';

const errorHandler = error => {
	const { status } = error;
	const noAuth = /(401)|(407)/;
	// const notFound = /(404)/;
	if (noAuth.test(status)) {
		message.error('登录失效！请您重新登录');
		// if (window && window.location) {
		// 	window.location.href = getLoginUrl();
		// 	return;
		// }
	}
};

const config = {
	// 默认地址请求地址，可在 .env 开头文件中修改
	// baseURL: import.meta.env.VITE_API_URL,
	withCredentials: true,
	headers: {},
	transformRequest: (data, headers) => {
		const tokenInfo = store.getState().auth.tokenInfo;
		headers['token'] = tokenInfo.token;
	}
};

const instance = axios.create(config);

instance.interceptors.response.use(
	response => response,
	err => {
		errorHandler(err);
		return Promise.reject(err);
	}
);

export default instance;
