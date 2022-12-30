import repository from './repository';

const resource = 'maintenance';
export const store = (payload) => {
	return repository.post(`${resource}/`, payload);
};

export const update = (payload) => {
	return repository.put(`${resource}/`, payload);
};
