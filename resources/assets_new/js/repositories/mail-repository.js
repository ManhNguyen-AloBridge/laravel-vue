import repository from './repository';

const resource = 'mail';
export const sendMultiCv = (data) => {
	return repository.post(`${resource}/send-multi-cv`, data);
};
