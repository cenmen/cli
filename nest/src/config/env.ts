import devConfig from './env.dev';
import prodConfig from './env.prod';

const { NODE_ENV } = process.env;

const config = {
  dev: devConfig,
  prod: prodConfig,
};

export default () => config[NODE_ENV];
