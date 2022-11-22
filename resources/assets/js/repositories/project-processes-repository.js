import repository from './repository';

const resource = 'project-processes';
export const getAll = () => {
	return repository.get(resource);
};
