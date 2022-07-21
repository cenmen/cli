import http from '@/api';
import api from '../api';

/**
 * @namespace 天气模块
 */

// * 获取天气
export const getWeatherByCity = async () => {
	const params = { t: Date.now() };
	const { data } = await http.get(api.weather, { params });
	return data;
};
