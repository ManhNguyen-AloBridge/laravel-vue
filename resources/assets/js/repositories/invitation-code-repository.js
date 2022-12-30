import repository from './repository';

const resource = 'invitation-codes';
export const store = (payload) => {
	return repository.post(`${resource}/`, payload);
};
