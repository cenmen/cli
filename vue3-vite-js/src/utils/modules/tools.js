import { clone } from 'lodash-es';
import { parse } from 'qs';
import { useAuthStore } from '@/store';

export const getPageQuery = () => parse(window.location.href.split('?')[1]);

export const navigate = path => (window.location.href = path);

export const isType = (data, type) => Object.prototype.toString.call(data) === `[object ${type}]`;

export const inType = (data, types) => types.some(val => isType(data, val));

export const getType = data => {
	const typeStr = Object.prototype.toString.call(data);
	const type = typeStr.replace(/(.*\s)|(\])/g, '');
	return type.toLowerCase();
};

export const getToken = () => {
	const { token } = useAuthStore();
	return token;
};

export const getLoginUrl = () => {
	return 'http://login.test.com';
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
		if (val !== undefined && val !== null && val !== '') return { ...total, [key]: isType(val, 'String') ? val.trim() : val };
		return total;
	}, {});
};
