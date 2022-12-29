import Taro from '@tarojs/taro';

export const getLoginCode = () => {
	return new Promise((resolve, reject) => {
		Taro.login({
			success(res) {
				res.code ? resolve(res.code) : reject(res);
			},
			fail(err) {
				reject(err);
			},
		});
	});
};
