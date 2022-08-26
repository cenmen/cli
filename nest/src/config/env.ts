import devConfig from './env.dev';
import prodConfig from './env.prod';

const { NODE_ENV } = process.env;

const config = {
  dev: devConfig,
  prod: prodConfig,
};

export default () => ({
  ...config[NODE_ENV],
  IS_DEV: NODE_ENV === 'dev',
  IS_PROD: NODE_ENV === 'prod',
});
