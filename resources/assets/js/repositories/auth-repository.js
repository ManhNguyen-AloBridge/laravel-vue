import repository from './repository';

const resource = 'register';
export const validateCompany = (payload) => {
	return repository.post(`${resource}/company`, payload);
};

export const registerService = (payload) => {
	return repository.post(`${resource}`, payload);
};

export const validateUser = (payload) => {
	return repository.post(`${resource}/user`, payload);
};
