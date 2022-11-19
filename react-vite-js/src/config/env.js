let exports = {};

try {
	if (window && window.ENV_CONFIG) exports = window.ENV_CONFIG;
} catch (error) {
	// console.log('🚀 ~ error', error);
}

// 代理转发请求
exports.AUTH_API = '/authApi';
exports.HERO_API = '/dataApi';

export const { ENV, AUTH_API, HERO_API } = exports;
console.log('🚀 ~ exports', exports);
