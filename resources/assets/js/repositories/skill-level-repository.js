import repository from './repository';

const resource = 'skill-levels';
export const getAll = () => {
	return repository.get(resource);
};
