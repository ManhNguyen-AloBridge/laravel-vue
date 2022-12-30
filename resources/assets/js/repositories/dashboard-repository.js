import repository from './repository';

const resource = 'dashboard';

export const statistic = (payload) => {
	return repository.get(`${resource}/statistic`);
};
