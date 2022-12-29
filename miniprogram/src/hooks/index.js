import { ref, reactive } from 'vue';
import Taro from '@tarojs/taro';
import { showToast } from '@/helpful';

/**
 * 请求
 * @param {function} request 请求函数
 * @returns {Promise<any>}
 */
export const useRequest = request => {
	const state = reactive({ isLoading: false, isError: false, data: null });
	const load = async params => {
		try {
			state.isLoading = true;
			const { data, isSuccess, message } = await request(params);
			if (!isSuccess) {
				showToast(message);
				state.isError = true;
			} else {
				state.data = data;
			}
			state.isLoading = false;
			return { data, isSuccess, message };
		} catch (error) {
			state.isLoading = false;
			return { data: null, isSuccess: false, message: error.message };
		}
	};
	return { load, state };
};

/**
 * 获取节点信息
 * @param {string} selector 节点id
 * @returns {Promise<any>}
 */
export const useSelectorClientRect = selector => {
	const data = ref(null);
	Taro.useReady(() => {
		setTimeout(() => {
			Taro.createSelectorQuery()
				.select(selector)
				.boundingClientRect(rect => {
					if (rect) data.value = rect;
				})
				.exec();
		}, 200);
	});
	return data;
};

/**
 * 获取系统信息
 * @returns {Promise<any>}
 */
export const useSystemInfo = () => {
	const data = ref(null);
	Taro.useReady(() => {
		Taro.getSystemInfoAsync({
			success(res) {
				data.value = res;
			},
		});
	});
	return data;
};
