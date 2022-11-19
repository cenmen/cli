import { clone } from 'lodash-es';
import { parse } from 'qs';
import { store } from '@/redux';

export const getPageQuery = () => parse(window.location.href.split('?')[1]);

export const isType = (data, type) => Object.prototype.toString.call(data) === `[object ${type}]`;

export const inType = (data, types) => types.some(val => isType(data, val));

export const getType = data => {
	const typeStr = Object.prototype.toString.call(data);
	const type = typeStr.replace(/(.*\s)|(\])/g, '');
	return type.toLowerCase();
};

export const getToken = () => {
	const auth = store.getState().auth;
	return auth.tokenInfo && auth.tokenInfo.access_token;
};

export const delay = timeout => {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve();
		}, timeout);
	});
};

export const cleanUpParams = params => {
	if (!isType(params, 'Object')) return params;
	const data = clone(params);
	return Object.entries(data).reduce((total, cur) => {
		const [key, val] = cur;
		if (val !== undefined && val !== null && val !== '') return { ...total, [key]: val };
		return total;
	}, {});
};
