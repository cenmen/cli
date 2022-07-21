const env = import.meta.env;

export const ENV = env.MODE;
export const IS_DEV = env.DEV;
export const IS_PROD = env.PROD;

console.log('==> [env]', env);
