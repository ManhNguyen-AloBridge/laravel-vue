import repository from './repository';

const resource = 'notification';
export const store = (payload) => {
	return repository.post(`${resource}/`, payload);
};

export const detail = (id) => {
	return repository.get(`${resource}/${id}`);
};

export const update = (payload) => {
	return repository.put(`${resource}/update`, payload);
};

export const deleteNoti = (id) => {
	return repository.delete(`${resource}/${id}`);
};
