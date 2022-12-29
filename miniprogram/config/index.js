const config = require('./taro.config.base');

module.exports = function (merge) {
	console.log('🚀  NODE_ENV', process.env.NODE_ENV);
	if (process.env.NODE_ENV === 'development') {
		return merge({}, config, require('./taro.config.dev'));
	}
	if (process.env.NODE_ENV === 'test') {
		return merge({}, config, require('./taro.config.test'));
	}
	return merge({}, config, require('./taro.config.prod'));
};
