import repository from './repository';

const resource = 'stripe';
export const retrieveAdditionFee = (payload) => {
	return repository.post(`${resource}/get-addition-subs-fee`, payload);
};

export const updateSubscription = (payload) => {
	return repository.put(`${resource}/subscriptions`, payload);
};
