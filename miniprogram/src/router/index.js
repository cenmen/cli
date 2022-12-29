import Taro from '@tarojs/taro';
import qs from 'query-string';
import { PAGES } from '@/constants';

/**
 * 跳转页面
 * @param {string} name 页面名称
 * @param {object} params 页面参数
 * @param {object} options 覆盖参数选项
 * @return {Promise<any>}
 */
export const navigateTo = (name, params, options) => {
	return new Promise((resolve, reject) => {
		const target = PAGES[name];
		if (!target) return reject('没有找到目标页面');
		const { url: page } = target;
		Taro.navigateTo({
			url: `${page}${params ? '?' + qs.stringify(params) : ''}`,
			...options,
			success(res) {
				resolve(res);
			},
			fail(res) {
				reject(res);
			},
		});
	});
};

/**
 * 重定向页面
 * @param {string} name 页面名称
 * @param {object} params 页面参数
 * @return {Promise<any>}
 */
export const redirectTo = (name, params) => {
	return new Promise((resolve, reject) => {
		const target = PAGES[name];
		if (!target) return reject('没有找到目标页面');
		const { url: page } = target;
		Taro.redirectTo({
			url: `${page}${params ? '?' + qs.stringify(params) : ''}`,
			success(res) {
				resolve(res);
			},
			fail(res) {
				reject(res);
			},
		});
	});
};

/**
 * 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面
 * @param {string} name 页面名称
 * @param {object} params 页面参数
 * @return {Promise<any>}
 */
export const switchTab = (name, params) => {
	return new Promise((resolve, reject) => {
		const target = PAGES[name];
		if (!target) return reject('没有找到目标页面');
		const { url: page } = target;
		Taro.switchTab({
			url: `${page}${params ? '?' + qs.stringify(params) : ''}`,
			success(res) {
				resolve(res);
			},
			fail(res) {
				reject(res);
			},
		});
	});
};

/**
 * 关闭所有页面，打开到应用内的某个页面
 * @param {string} name 页面名称
 * @param {object} params 页面参数
 * @return {Promise<any>}
 */
export const reLaunch = (name, params) => {
	return new Promise((resolve, reject) => {
		const target = PAGES[name];
		if (!target) return reject('没有找到目标页面');
		const { url: page } = target;
		Taro.reLaunch({
			url: `${page}${params ? '?' + qs.stringify(params) : ''}`,
			success(res) {
				resolve(res);
			},
			fail(res) {
				reject(res);
			},
		});
	});
};

/**
 * 关闭当前页面，返回上一页面或多级页面
 * @param {number} delta 返回的页面数，如果 delta 大于现有页面数，则返回到首页
 * @return {Promise<any>}
 */
export const navigateBack = delta => {
	return new Promise((resolve, reject) => {
		Taro.navigateBack({
			delta,
			success(res) {
				resolve(res);
			},
			fail(res) {
				reject(res);
			},
		});
	});
};
