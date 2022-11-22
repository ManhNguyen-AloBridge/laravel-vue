import repository from './repository';

const resource = 'company';
export const getDetail = (payload) => {
	return repository.get(`${resource}`, { params: payload });
};

export const handleAdminUpdate = (payload) => {
	return repository.put(`${resource}/admin`, payload);
};

export const handleSAdminUpdate = (payload) => {
	return repository.put(`${resource}/s-admin`, payload);
};

export const confirmAdminUpdate = (payload) => {
	return repository.put(`${resource}/confirm-update/admin`, payload);
};

export const confirmSAdminUpdate = (payload) => {
	return repository.put(`${resource}/confirm-update/s-admin`, payload);
};

export const getAll = () => {
	return repository.get(`${resource}/all`);
};
