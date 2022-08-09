import http from '@/api';
import api from '../api';

/**
 * @namespace 天气模块
 */

// * 获取天气
export const getWeatherByCity = async () => {
	const params = { t: Date.now() };
	const { data } = await http.get(api.weather, { params });
	const list = data.data.city.map(val => ({
		name: val[1],
		code: val[17],
		temperature: val[4]
	}));
	return { list, count: list.length };
};
