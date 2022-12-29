import Taro from '@tarojs/taro';

export const requestPayment = params => {
	return new Promise((resolve, reject) => {
		Taro.requestPayment({
			...params,
			success(res) {
				resolve(res);
			},
			fail(res) {
				reject(res);
			},
		});
	});
};
