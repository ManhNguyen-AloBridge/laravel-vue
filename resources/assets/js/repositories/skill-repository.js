import repository from './repository';

const resource = 'skills';
export const getAll = () => {
	return repository.get(resource);
};
