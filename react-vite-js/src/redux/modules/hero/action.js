import { message } from 'antd';
import * as types from '@/redux/mutation-types';
import { fetchHeroItem } from '@/api';

// 更新订单详情
export const updateHeroItemDetail = (id, callback) => {
	const requestHeroItem = async () => {
		try {
			const data = await fetchHeroItem(id);
			if (callback) callback();
			return data;
		} catch (error) {
			if (callback) callback();
			message.error('获取英雄详情失败');
		}
	};
	return {
		type: types.SET_CURRENT_HERO_ITEM,
		payload: requestHeroItem()
	};
};
