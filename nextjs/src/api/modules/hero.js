import http from '../http';
import { HERO_API } from '@/config/env';

/**
 * @namespace 英雄联盟数据示例模块
 */

/**
 * 获取英雄联盟英雄数据
 * @returns {Promise<{object}[]>}
 */
export const fetchHeroData = () => http.get(`${HERO_API}/act/img/js/heroList/hero_list.js`);

/**
 * 获取英雄联盟英雄详情
 * @returns {Promise<{object}[]>}
 */
export const fetchHeroItem = id => http.get(`${HERO_API}/act/img/js/hero/${id}.js`);

/**
 * 获取英雄联盟装备数据
 * @returns {Promise<{object}[]>}
 */
export const fetchStackData = () => http.get(`${HERO_API}/act/img/js/items/items.js`);
