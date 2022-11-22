import * as projectProcessesRepository from './project-processes-repository';
import * as skillLevelRepository from './skill-level-repository';
import * as skillRepository from './skill-repository';
import * as stripeRepository from './stripe-repository';
import * as companyRepository from './company-repository';
import * as userRepository from './user-repository';

const repositories = {
	'project-process': projectProcessesRepository,
	'skill-level': skillLevelRepository,
	skill: skillRepository,
	stripe: stripeRepository,
	company: companyRepository,
	user: userRepository,
};

export const getRepository = (name) => {
	return repositories[name];
};
