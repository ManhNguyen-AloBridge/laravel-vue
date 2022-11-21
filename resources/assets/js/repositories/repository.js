import axios from 'axios';

const service = axios.create({
	baseURL: '/web-api/',
	timeout: 30000, // 30s
});

export default service;
