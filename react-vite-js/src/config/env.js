const env = import.meta.env;

export const ENV = env.MODE;
export const IS_DEV = env.DEV;
export const IS_PROD = env.PROD;
export const BASE_API = env.VITE_BASE_API;
export const WEATHER_API = env.VITE_WEATHER_API;

console.log('==> [env]', env);
