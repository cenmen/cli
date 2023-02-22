import devConfig from './env.dev';
import testConfig from './env.test';
import prodConfig from './env.prod';

const NODE_ENV = process.env?.NODE_ENV || 'prod';
console.log('🚀 -> NODE_ENV', NODE_ENV);

const config = {
  dev: devConfig,
  test: testConfig,
  prod: prodConfig,
};

export default () => ({
  ...config[NODE_ENV],
  IS_DEV: NODE_ENV === 'dev',
  IS_TEST: NODE_ENV === 'test',
  IS_PROD: NODE_ENV === 'prod',
});
