import axios from 'axios';

const errorHandler = error => {
	// const { status, statusText } = error.response;
};

const config = {};

const instance = axios.create(config);

instance.interceptors.request.use(request => {
	// const token = getToken();
	// request.headers['Authorization'] = `Bearer ${token}`;
	return request;
});

instance.interceptors.response.use(
	response => response.data,
	err => {
		errorHandler(err);
		return Promise.reject(err);
	}
);

export default instance;
