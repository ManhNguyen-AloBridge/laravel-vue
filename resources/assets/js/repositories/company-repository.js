import repository from './repository';

const resource = 'company';
export const getDetail = () => {
	return repository.get(`${resource}`);
};

export const update = (payload) => {
	return repository.put(`${resource}`, payload);
};
