import Taro from '@tarojs/taro';

export const showToast = (title, options) => {
	Taro.showToast({
		title,
		icon: 'none',
		duration: 1500,
		...options,
	});
};
