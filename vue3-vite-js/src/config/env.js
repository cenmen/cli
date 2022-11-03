const exports = {};
{
	const ENV = 'dev';
	exports.ENV = ENV;
	// 代理转发请求
	exports.AUTH_API = '/authApi';
}
export const { ENV, AUTH_API } = exports;
console.log('🚀 ~ exports', exports);
