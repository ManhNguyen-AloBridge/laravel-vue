import repository from './repository';

const resource = 'qualifications';
export const getAll = () => {
	return repository.get(resource);
};
