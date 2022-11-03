import axios from 'axios';
import { message } from 'ant-design-vue';
import { getToken, getLoginUrl, navigate } from '@/utils';

const errorHandler = error => {
	const { status, data } = error.response;
	const noAuth = /(401)|(407)/;
	// const notFound = /(404)/;
	if (noAuth.test(status)) {
		message.error('登录失效！请您重新登录');
		if (window && window.location) {
			navigate(getLoginUrl());
			return;
		}
	} else if (!data) {
		message.error('请求失败，请稍后重试~');
	}
};

const config = {};

const instance = axios.create(config);

instance.interceptors.request.use(request => {
	const token = getToken();
	request.headers['Authorization'] = `Bearer ${token}`;
	return request;
});

instance.interceptors.response.use(
	response => response.data,
	err => {
		errorHandler(err);
		return Promise.reject(err.response);
	}
);

export default instance;
