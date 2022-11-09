let exports = {};

try {
	if (window && window.ENV_CONFIG) exports = window.ENV_CONFIG;
} catch (error) {
	// console.log('🚀 ~ error', error);
}

// 代理转发请求
exports.AUTH_API = '/authApi';

export const { ENV, AUTH_API } = exports;
console.log('🚀 ~ exports', exports);
