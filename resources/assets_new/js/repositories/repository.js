import axios from 'axios';
import loading from '../components/shared/loading';

const service = axios.create({
	baseURL: '/web-api/',
	timeout: 30000, // 30s
});

service.interceptors.request.use(
	function (config) {
		return config;
	},
	function (error) {
		return Promise.reject(error);
	}
);

// Add a response interceptor
service.interceptors.response.use(
	function (response) {
		return response;
	},
	function (error) {
		return Promise.reject(error);
	}
);

function handleStartRequest() {
	if (!window.countRequest) {
		loading.show();
	}

	window.countRequest = (window.countRequest ?? 0) + 1;
}

function handleEndRequest() {
	window.countRequest = (window.countRequest ?? 1) - 1;
	if (window.countRequest === 0) {
		loading.hide();
	}
}

export default service;
