import * as projectProcessesRepository from './project-processes-repository';
import * as skillLevelRepository from './skill-level-repository';
import * as skillCategoryRepository from './skill-category-repository';
import * as skillRepository from './skill-repository';
import * as stripeRepository from './stripe-repository';
import * as companyRepository from './company-repository';
import * as userRepository from './user-repository';
import * as mailRepository from './mail-repository';
import * as authRepository from './auth-repository';
import * as dashboardRepository from './dashboard-repository';
import * as qualificationRepository from './qualification-repository';
import * as maintenanceRepository from './maintenance-repository';
import * as notificationRepository from './notification-repository';
import * as invitationCodeRepository from './invitation-code-repository';

const repositories = {
	'project-process': projectProcessesRepository,
	'skill-level': skillLevelRepository,
	'skill-category': skillCategoryRepository,
	qualification: qualificationRepository,
	skill: skillRepository,
	stripe: stripeRepository,
	company: companyRepository,
	user: userRepository,
	mail: mailRepository,
	auth: authRepository,
	dashboard: dashboardRepository,
	maintenance: maintenanceRepository,
	notification: notificationRepository,
	invitationCode: invitationCodeRepository,
};

export const getRepository = (name) => {
	return repositories[name];
};
