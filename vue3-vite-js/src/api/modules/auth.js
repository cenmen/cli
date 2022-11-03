import http from '@/api';
import * as api from '../api';

/**
 * @namespace 角色权限模块
 */

// 获取权限列表
export const getAuthInfo = params => http.get(`${api.auth}/authInfo`, { params });

// 获取用户信息
export const getUserInfo = () => http.get(`${api.auth}/userInfo`);
