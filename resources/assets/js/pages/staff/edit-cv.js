import datepicker from '../../plugins/datepicker';
import select2 from '../../plugins/select2';
import { getRepository } from '../../repositories/repository-factory';

const projectProcessesRepository = getRepository('project-process');
const skillLevelRepository = getRepository('skill-level');
const skillRepository = getRepository('skill');

(async function () {
	try {
		const projectResponse = await projectProcessesRepository.getAll();
		const skillLevelResponse = await skillLevelRepository.getAll();
		const skillResponse = await skillRepository.getAll();
		const { processes } = projectResponse.data;
		const { skillLevels } = skillLevelResponse.data;
		const { skills } = skillResponse.data;

		const skillOptionMarkup = generateOptions(skills);
		const skillLevelOptionMarkup = generateOptions(skillLevels);

		$(document).on('click', '.btn-add-project', function () {
			const companyIndex = $(this).data('company-index');
			const index = $(this).data('index');

			const projectMarkup = generateProjectMarkup(
				processes,
				companyIndex,
				index
			);
			const projectSection = $(this)
				?.closest('.company-section')
				?.find('.project-section');
			$(this)
				.closest('.company-section')
				.find('.card')
				.each((index, element) => {
					toggleCardBody(element, false);
				});
			$(projectSection).append(projectMarkup);
			$(this).data('index', index + 1);
			datepicker(summarySection);
		});

		$('.btn-add-job').click(function () {
			const index = $(this).data('index');
			const projectMarkup = generateProjectMarkup(processes, index, 0);
			const jobMarkup = generateJobMarkup(projectMarkup, index);
			$(this)
				.closest('.col-md-12')
				.children('.card')
				.each((index, element) => {
					toggleCardBody(element, false);
				});

			$(jobMarkup).insertBefore($(this));
			$(this).data('index', index + 1);
			datepicker(summarySection);
		});

		$('.btn-add-skill').click(function () {
			const index = $(this).data('index');
			const skillMarkup = generateSkillMarkup(
				skillOptionMarkup,
				skillLevelOptionMarkup,
				index
			);
			$(this).data('index', index + 1);
			$('.btn-delete-skill').prop('disabled', false);
			$(skillMarkup).insertBefore($(this).closest('.col-md-12'));
			select2();

			defaultSelectedLevelSkill();
		});

		$('.btn-add-education').click(function () {
			const index = $(this).data('index');
			$(this)
				.closest('.col-md-12')
				.children()
				.each((index, element) => {
					toggleCardBody(element, false);
				});

			const educationMarkup = generateEducationMarkup(index);
			$(this).data('index', index + 1);
			$(educationMarkup).insertBefore($(this).closest('.form-group'));
			datepicker(summarySection);
		});
	} catch (error) {
		toastr.error('Something went wrong!');
	}
})();

function generateProjectMarkup(processes, companyIndex, index) {
	const processesMarkup = generateProcessesMarkup(
		processes,
		companyIndex,
		index
	);

	return `
	<div class="card card-success card-outline card-cv summary" data-section="project">
		<div class="card-header">
			<div class="card-title"></div>
			<div class="card-tools">
				<button type="button" class="btn btn-tool btn-collapse" data-card-widget="collapse" title="Collapse">
					<i class="fas fa-minus"></i>
				</button>
				<button type="button" class="btn btn-tool btn-delete-project" data-card-widget="delete" title="Delete job"><i class="fa fa-times"></i></button>
			</div>
		</div>
		<div class="card-body">
			<input type="hidden" class="form-control" name="job_histories[${companyIndex}][projects][${index}][id]" value="" >
			<div class="row">
				<div class="form-group col-md-12 ">
					<label for="">案件名</label>
					<input type="text" class="form-control" name="job_histories[${companyIndex}][projects][${index}][name]" value="" >
				</div>
				<div class="form-group col-md-6">
					<label for="">開始日</label>
					<input type="text" class="form-control date-picker" data-date-format="Y/MM" name="job_histories[${companyIndex}][projects][${index}][start_date]" value="">
				</div>
				<div class="form-group col-md-6">
					<label for="">終了日</label>
					<input type="text" class="form-control date-picker" data-date-format="Y/MM" name="job_histories[${companyIndex}][projects][${index}][end_date]" value="">
				</div>
				<div class="form-group col-md-12">
					<label for="">環境・言語</label>
					<input type="text" class="form-control" name="job_histories[${companyIndex}][projects][${index}][env_languages]" value="">
				</div>
				<div class="form-group col-md-12">
    				<label for="">規模・人数</label>
            		<input type="text" class="form-control" name="job_histories[${companyIndex}][projects][${index}][number_of_people]" value="">
		    	</div>
				<div class="form-group col-md-12">
    				<label for="">役割・役職</label>
            		<input type="text" class="form-control" name="job_histories[${companyIndex}][projects][${index}][role]" value="">
		    	</div>
				<div class="form-group col-md-12">
					<label for="">環境・言語</label>
					<div class="row">
						${processesMarkup}
					</div>
				</div>
				<div class="form-group col-md-12">
					<label for="">説明</label>
					<textarea class="form-control" name="job_histories[${companyIndex}][projects][${index}][description]"></textarea>
				</div>

			</div>
		</div>
	</div>`;
}
function generateProcessesMarkup(processes, companyIndex, index) {
	return processes
		.map((process) => {
			return `<label class="col-md-4">
						<input type="checkbox" class="mr-1" value="${
							process.id
						}" name="job_histories[${companyIndex}][projects][${index}][processes][]">${_.escape(
				process.name
			)}
					</label>`;
		})
		.join('');
}
function generateJobMarkup(projectMarkup, index) {
	return `
		<div class="card card-primary card-outline card-cv summary" data-section="company">
			<div class="card-header">
				<div class="card-title"></div>
				<div class="card-tools">
					<button type="button" class="btn btn-tool btn-collapse" data-card-widget="collapse" title="Collapse">
						<i class="fas fa-minus"></i>
					</button>
					<button type="button" class="btn btn-tool btn-delete-company" title="Delete job"><i
							class="fa fa-times"></i></button>
				</div>
			</div>
			<div class="card-body">
				<div class="col-md-12">
					<div class="row company-section 1">
						<div class="form-group col-md-12">
							<label for="">勤務先</label>
							<input type="text" class="form-control" name="job_histories[${index}][work_place]" value="">
						</div>
						<div class="form-group col-md-6">
							<label for="">開始日</label>
							<input type="text" class="form-control date-picker" name="job_histories[${index}][start_date]" data-date-format="Y/MM" value="">
						</div>
						<div class="form-group col-md-6">
							<label for="">終了日</label>
							<input type="text" class="form-control date-picker" name="job_histories[${index}][end_date]" data-date-format="Y/MM" value="">
						</div>
						<div class="pl-5 pr-4 col-md-12 project-section">
						${projectMarkup}
						</div>
						<div class="col-md-12 pl-5 pr-4 form-group">
							<button type="button" class="btn btn-outline-success form-control btn-add-project" data-company-index="${index}" data-index="1"><i class="fas fa-plus"></i></button>
						</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	`;
}
function generateSkillMarkup(
	skillOptionMarkup,
	qualificationOptionMarkup,
	index
) {
	return `
		<div class="col-md-12 form-group">
			<div class="row">
				<div class="col-md-11 parent-skill">
					<div class="row">
						<div class="col-md-6">
							<select class="form-control select2 main-skill" name="resume[skills][${index}][id]">
								<option value="">&nbsp;</option>
								${skillOptionMarkup}
							</select>
						</div>
						<div class="col-md-6">
							<select class="form-control select2 main-level-skill" name="resume[skills][${index}][level_id]">
								<option value="">&nbsp;</option>
								${qualificationOptionMarkup}
							</select>
						</div>
					</div>
				</div>
				<div class="col-md-1">
					<button type="button" class="btn form-control btn-light btn-delete-skill"><i class="fas fa-trash"></i></button>
				</div>
			</div>
		</div>
	`;
}
function generateOptions(skills) {
	return skills
		.map((skill) => {
			return `<option value="${skill.id}">${_.escape(
				skill.name
			)}</option>`;
		})
		.join('');
}
function generateEducationMarkup(index) {
	return `<div class="card card-primary card-outline card-cv summary" data-section="education">
				<div class="card-header">
					<div class="card-title"></div>
					<div class="card-tools">
						<button type="button" class="btn btn-tool btn-collapse" data-card-widget="collapse" title="Collapse">
							<i class="fas fa-minus"></i>
						</button>
						<button type="button" class="btn btn-tool btn-delete-company" title="Delete job"><i class="fa fa-times"></i></button>
					</div>
				</div>
				<div class="card-body">
					<div class="row education-section">
						<div class="form-group col-md-6 col-sm-12">
							<label for="">学校名</label>
							<input type="text" class="form-control" name="educations[${index}][name]" value="" title="学校名">
						</div>
						<div class="form-group col-md-6  col-sm-12">
							<label for="">学位</label>
							<input type="text" class="form-control" name="educations[${index}][degree]" value="" title="学位">
						</div>
						<div class="form-group col-md-6 col-sm-12">
							<label for="">開始日</label>
							<input type="text" class="form-control date-picker" placeholder="YYYY/MM/DD" name="educations[${index}][start_date]" value="" autocomplete="off" error_key="education.start_date" title="開始日">
						</div>
						<div class="form-group col-md-6 col-sm-12">
							<label for="">終了日</label>
							<input type="text" class="form-control date-picker" placeholder="YYYY/MM/DD" name="educations[${index}][end_date]" value="" autocomplete="off" error_key="education.end_date" title="終了日">
						</div>
					</div>
				</div>

			</div>`;
}

$(document).on('click', '.btn-delete-project', function (e) {
	e.preventDefault();

	$(this).closest('.card').remove();
});

$(document).on('click', '.btn-delete-company', function (e) {
	e.preventDefault();

	$(this).closest('.card').remove();
});

$(document).on('click', '.btn-delete-education', function (e) {
	e.preventDefault();

	$(this).closest('.card').remove();
});

$(document).on('click', '.btn-delete-skill', function () {
	const skillCount = $('.btn-delete-skill').length;
	if (skillCount <= 1) {
		return;
	}

	$(this).closest('.col-md-12').remove();
	$('.btn-delete-skill').prop('disabled', skillCount <= 2);
});

$(document).on('click', '.btn-collapse', function (e) {
	summarySection(this);
});

function toggleCardBody(context, show) {
	$(context)
		.closest('.col-md-12')
		.children('.card')
		.not('.collapsed-card')
		.each((index, item) => {
			$(item).find('.btn-collapse')[0].click();
		});

	summarySection(context);
}

$(document).on('keyup', '.summary', function (e) {
	e.stopPropagation();
	summarySection(this);
});

$(document).ready(function () {
	$('.summary').each((index, item) => {
		summarySection(item);
	});
});

function summarySection(context) {
	const section = $(context).closest('.summary').data('section') ?? '';

	if (section == 'education') {
		summaryEducation(context);
	}

	if (section == 'company') {
		summaryCompany(context);
	}

	if (section == 'project') {
		summaryProject(context);
	}
}

function summaryEducation(e) {
	const cardElement = $(e).closest('.card');
	const name = cardElement.find('input[name*=name]').val() || '(未入力)';
	const degree = cardElement.find('input[name*=degree]').val() || '(未入力)';
	const startDate = cardElement.find('input[name*=start_date]').val() || '';
	const endDate = cardElement.find('input[name*="end_date"]').val() || '';
	const cardTitle = cardElement.find('.card-title');

	cardTitle.text(
		`${ellipseString(name, 30)} - ${ellipseString(
			degree,
			30
		)}: ${ellipseString(startDate, 30)} ~ ${endDate}`
	);
}

function summaryProject(e) {
	const cardElement = $(e).closest('.card');
	const workPlace = cardElement.find('input[name*=name]').val() || '(未入力)';
	const startDate = cardElement.find('input[name*=start_date]').val() || '';
	const endDate = cardElement.find('input[name*="end_date"]').val() || '';
	const cardTitle = cardElement.find('.card-title');
	cardTitle.text(
		`${ellipseString(workPlace, 30)}: ${ellipseString(
			startDate,
			30
		)} ~ ${ellipseString(endDate, 30)}`
	);
}

function summaryCompany(e) {
	const cardElement = $(e).closest('.card');
	const workPlace =
		cardElement.find('input[name*=work_place]').val() || '(未入力)';
	const startDate = cardElement.find('input[name*=start_date]').val() || '';
	const endDate = cardElement.find('input[name*="end_date"]').val() || '';
	const cardTitle = cardElement.children('.card-header').find('.card-title');
	cardTitle.text(
		`${ellipseString(workPlace)}: ${ellipseString(
			startDate
		)} ~ ${ellipseString(endDate)}`
	);
}

function ellipseString(value, length = 30) {
	if (value?.length < length) {
		return value;
	}

	return `${value.slice(0, length)}...`;
}

$(document).ready(function () {
	$(document).on('keydown', ':input:not(textarea)', function (event) {
		if (event.keyCode == 13) {
			event.preventDefault();
			return false;
		}
	});
});

function defaultSelectedLevelSkill() {
	$('.main-skill').on('change', function () {
		let levelSkill = $(this)
			.closest('.parent-skill')
			.find('.main-level-skill option:first');
		if (levelSkill.val() == '') {
			levelSkill.remove();
		}
	});
}

defaultSelectedLevelSkill();
