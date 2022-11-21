import repository from './repository';

const resource = 'users';
export const getAll = () => {
	return repository.get(resource);
};
