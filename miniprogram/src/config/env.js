import devConfig from './env.dev';
import testConfig from './env.test';
import prodConfig from './env.prod';

export const ENV = {
	DEV: 'dev',
	TEST: 'test',
	PROD: 'prod',
};

const ENV_CONFIG = {
	[ENV.DEV]: devConfig,
	[ENV.TEST]: testConfig,
	[ENV.PROD]: prodConfig,
};

// 设置当前环境
export const CURRENT_ENV = ENV.TEST;
const config = ENV_CONFIG[CURRENT_ENV];
export const { ACGI_API, FE_ACGI_API, FE_WCGI_API, WEB_GATEWAY_V3_API, APP_HYBRID_API } = config;
