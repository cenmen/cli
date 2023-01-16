/**
 * @namespace 登录验证示例模块
 */

/**
 * 获取登录数据（测试）
 * @returns {Promise<{object}[]>}
 */
export const fetchLoginInfo = async () => {
	const data = {
		token: 'token123',
		username: '测试名字',
		avatar: 'https://p3-passport.byteimg.com/img/user-avatar/15f062b5a69afde661688ac983e6bd4e~100x100.awebp',
	};
	return Promise.resolve(data);
};
