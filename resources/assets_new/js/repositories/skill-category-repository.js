import repository from './repository';

const resource = 'skill-categories';
export const getAll = () => {
	return repository.get(resource);
};
