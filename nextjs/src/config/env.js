export const ENV_VARIABLE = {
	DEV: 'dev',
	TEST: 'test',
	PROD: 'prod',
};

export const ENV = process.env.NEXT_PUBLIC_ENV;
// 是否生产环境
export const IS_PROD = ENV === ENV_VARIABLE.PROD;
// 是否浏览器端
export const IS_BROWSER = process.browser;
// 英雄联盟 API
export const HERO_API = process.env.NEXT_PUBLIC_HERO_API;
