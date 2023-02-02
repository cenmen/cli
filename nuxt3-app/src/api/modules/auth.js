import { DATA_CAILIANSHE_API } from '@/config/env';
import http from '../http';
/**
/**
 * @namespace 登录模块
 */

/**
 * 获取权限列表
 * @returns {Promise<[]>}
 */
export const fetchAuthInfo = () => {
  return Promise.resolve(true);
};

/**
 * 测试数据
 * @returns {Promise<{object}[]>}
 */
export const fetchCailianshePlateData = params => http.get(`${DATA_CAILIANSHE_API}/web_quote/plate/info`, { params });

/**
 * 测试数据2
 * @returns {Promise<{object}[]>}
 */
export const fetchHelloData = () => http.get(`/api/hello`);
