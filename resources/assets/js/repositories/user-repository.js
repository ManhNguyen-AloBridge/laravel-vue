import repository from './repository';

const resource = 'users';
export const getAll = () => {
	return repository.get(resource);
};

export const getDetail = (userId) => {
	return repository.get(`${resource}/${userId}`);
};

export const updateInfo = (data) => {
	return repository.put(`${resource}`, data['user']);
};

export const search = (payload) => {
	return repository.get(`${resource}/search`, { params: payload });
};

export const updateCv = (staffId, payload) => {
	return repository.post(`${resource}/${staffId}/cv`, payload, {
		headers: {
			'Content-Type': 'multipart/form-data',
		},
	});
};

export const checkExistsEmail = (payload) => {
	return repository.post(`${resource}/check-exists-email`, payload);
};
