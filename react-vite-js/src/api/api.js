const loginService = 'http://localhost:3000';
const weatherService = '/weather'; // https://weather.cma.cn/

const login = `${loginService}/login`;

const weather = `${weatherService}/api/map/weather/1`;

export default {
	login,
	weather
};
