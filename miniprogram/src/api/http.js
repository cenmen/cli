import Taro from '@tarojs/taro';
import { navigateTo } from '@/router';
import { useAuthStore } from '@/stores';
import { APP_PLATFORM, APP_ORIGIN_TYPE } from '@/constants';

// const authInterceptor = function (chain) {
// 	const requestParams = chain.requestParams;
// 	const { header } = requestParams;

// 	return chain.proceed(requestParams).then(res => {
// 		return res;
// 	});
// };
// Taro.addInterceptor(authInterceptor);

const http = async options => {
	return new Promise((resolve, reject) => {
		options.timeout = 5000;
		const authStore = useAuthStore();
		const pages = Taro.getCurrentPages();
		const currentPage = pages[pages.length - 1];
		const isLoginPage = currentPage.route === 'pages/login/login';
		if (!options.header) options.header = {};
		if (!options.noAuth && authStore.token) options.header['Authorization'] = `Bearer ${authStore.token}`;
		Taro.request({
			...options,
			success(res) {
				res.statusCode <= 210 ? resolve(res.data) : reject(res.data);
				if (res.statusCode === 401 && !isLoginPage) navigateTo('login');
			},
			fail(err) {
				reject(err);
			},
		});
	});
};

http.get = (url, data, options) => http({ ...options, method: 'GET', data, url });
http.post = (url, data, options) => http({ ...options, method: 'POST', data, url });
http.delete = (url, data, options) => http({ ...options, method: 'DELETE', data, url });
http.patch = (url, data, options) => http({ ...options, method: 'PATCH', data, url });
http.put = (url, data, options) => http({ ...options, method: 'PUT', data, url });

export default http;
