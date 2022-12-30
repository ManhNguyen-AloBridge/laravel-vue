import { getRepository } from '../../repositories/repository-factory';
import selectBox from './select-box';
import editCvDatepicker from '../../components/staff/edit-cv-datepicker';
import { map, parseInt } from 'lodash';
import loading from '../../components/shared/loading';

const projectProcessesRepository = getRepository('project-process');
const skillLevelRepository = getRepository('skill-level');
const skillCategoryRepository = getRepository('skill-category');
const skillRepository = getRepository('skill');
const qualificationRepository = getRepository('qualification');

let widthScreen = $(window).width();
let isShowOptionFullWidth = false;

$(window).on('resize', function () {
	widthScreen = $(window).width();

	if (widthScreen >= 576) {
		isShowOptionFullWidth = true;
	} else {
		isShowOptionFullWidth = false;
	}
	generateIdInputProcess(widthScreen);
	checkTypeCheckboxDisplay(widthScreen);

	updateWidthNameProject(isShowOptionFullWidth);
});

$(document).on('click', function (e) {
	const elm = $(e.target);

	if (
		elm.closest('.sort-element').length == 0 &&
		elm.closest('.options').length == 0
	) {
		$('.sort-element').attr('style', 'display:none');
	}
});

$(document).ready(function () {
	if (widthScreen >= 576) {
		isShowOptionFullWidth = true;
	} else {
		isShowOptionFullWidth = false;
	}

	selectBox();
	generateIdInputProcess(widthScreen);
	updateWidthNameProject(isShowOptionFullWidth);

	(async function () {
		try {
			const projectResponse = await projectProcessesRepository.getAll();
			const skillLevelResponse = await skillLevelRepository.getAll();
			const skillCategoryResponse =
				await skillCategoryRepository.getAll();
			const skillResponse = await skillRepository.getAll();
			const qualificationResponse =
				await qualificationRepository.getAll();

			const { processes } = projectResponse.data;
			const { skillLevels } = skillLevelResponse.data;
			const { skillCategories } = skillCategoryResponse.data;
			const { skills } = skillResponse.data;
			const { qualifications } = qualificationResponse.data;

			let prevQualificationValueOptionSelected = null;
			let prevSkillCategoryValueOptionSelected = null;
			let prevSkillNameValueOptionSelected = null;

			const skillLevelOptionMarkup = generateOptions(skillLevels);
			const skillCategoryOptionMarkup = generateSkillCategoryOptions(
				skillCategories,
				skills
			);

			let listSkillSelected = getListOptionSelectedOfElement('skill');
			let listQualificationSelected =
				getListOptionSelectedOfElement('qualification');

			handleSkillOptionsMarkup(listSkillSelected, skills);
			handleQualificationOptionsMarkup(listQualificationSelected);

			let indexProject = $('.project-sort').length;

			$(document).on('click', '.btn-add-project', function () {
				const count = $('.project-sort').length;
				const projectMarkup = generateProjectMarkup(
					processes,
					indexProject,
					count
				);
				indexProject = indexProject + 1;
				$('.form-table-job .col-md-12').append(projectMarkup);
				editCvDatepicker();
				disableArrow();
				checkCountProject();
			});
			$(document).on('click', '.btn-add-education', function () {
				const index = $(this).data('index');
				const educationMarkup = generateEducationMarkup(index + 1);

				$(this).data('index', index + 1);

				$(educationMarkup)
					.insertBefore($('.after-row-education'))
					.closest('.form-table-education');

				$('.btn-back-education').show();
				editCvDatepicker();
			});

			$(document).on('click', '.btn-add-qualification', function () {
				const index = $(this).data('index');

				const qualificationOptionMarkup =
					generateQualificationOptionsMarkup(qualifications);

				const qualificationMarkup = generateQualificationMarkup(
					qualificationOptionMarkup,
					index + 1
				);

				$(this).data('index', index + 1);

				$(qualificationMarkup)
					.insertBefore($('.after-row-qualification'))
					.closest('.form-table-qualification');

				$('.btn-back-qualification').show();
				editCvDatepicker();
				selectBox();
			});

			$(document).on('click', '.btn-add-skill', function () {
				const index = $(this).data('index');
				const skillOptionMarkup = generateSkillOptionsMarkup(skills);

				const skillMarkup = generateSkillMarkup(
					skillCategoryOptionMarkup,
					skillOptionMarkup,
					skillLevelOptionMarkup,
					index + 1
				);
				$(this).data('index', index + 1);

				$(skillMarkup)
					.insertBefore($('.after-row-skill'))
					.closest('.form-table-skill');

				selectBox();
			});

			$(document)
				.on(
					'focus',
					'.form-table-qualification .select-qualification',
					function () {
						prevQualificationValueOptionSelected = parseInt(
							$(this).val()
						);
					}
				)
				.on(
					'change',
					'.form-table-qualification .select-qualification',
					function () {
						const currentValue = parseInt($(this).val());

						listQualificationSelected = updateListOptionSelected(
							prevQualificationValueOptionSelected,
							currentValue,
							listQualificationSelected
						);

						prevQualificationValueOptionSelected = currentValue;

						handleQualificationOptionsMarkup(
							listQualificationSelected
						);
					}
				);

			$(document)
				.on(
					'focus',
					'.form-table-skill .select-skill-category',
					function () {
						prevSkillCategoryValueOptionSelected = parseInt(
							$(this).val()
						);
					}
				)
				.on(
					'change',
					'.form-table-skill .select-skill-category',
					function () {
						const currentValue = parseInt($(this).val());
						const skillNameSelect = $(this)
							.closest('tr.form-table__row.row-skill')
							.find('select.select-skill-name');
						const prevNameValue = parseInt(skillNameSelect.val());

						listSkillSelected = updateListOptionSelected(
							prevNameValue,
							null,
							listSkillSelected
						);

						prevSkillCategoryValueOptionSelected = currentValue;

						skillNameSelect
							.find('option')
							.removeAttr('selected')
							.first()
							.text(
								i18next.t(
									'pages.staff.edit_cv.select_skill_name'
								)
							)
							.prop('selected', true)
							.prop('disabled', true);

						handleSkillOptionsMarkup(listSkillSelected, skills);
					}
				);

			$(document)
				.on(
					'focus',
					'.form-table-skill .select-skill-name',
					function () {
						prevSkillNameValueOptionSelected = parseInt(
							$(this).val()
						);
					}
				)
				.on(
					'change',
					'.form-table-skill .select-skill-name',
					function () {
						const currentValue = parseInt($(this).val());

						listSkillSelected = updateListOptionSelected(
							prevSkillNameValueOptionSelected,
							currentValue,
							listSkillSelected
						);

						prevSkillNameValueOptionSelected = currentValue;

						handleSkillOptionsMarkup(listSkillSelected, skills);
					}
				);

			listQualificationSelected = deleteItemSkillOrQualification(
				'qualification',
				listQualificationSelected
			);

			listSkillSelected = deleteItemSkillOrQualification(
				'skill',
				listSkillSelected,
				skills
			);
		} catch (error) {
			toastr.error('Something went wrong!');
		}
	})();
});

$('#form-download-cv').on('click', function () {
	setTimeout(() => {
		loading.hide();
	}, 1000);
});

$(document).on('click', '.options__btn', function () {
	$(this)
		.closest('.project-sort')
		.find('.sort-element')
		.attr('style', 'display:flex');
});

$(document).on(
	'click',
	'.sort-element__close,.sort-element__arrow',
	function () {
		$(this).parent().attr('style', '');
	}
);

$('.options_btn').on('click', function () {});

function deleteItemSkillOrQualification(key, listOptionSelected, skills = []) {
	$(document).on('click', `.btn-delete-${key}`, function () {
		const countItem = $(`.btn-delete-${key}`).length;

		if (countItem <= 1 && key === 'skill') {
			return toastr.error('Skill is required!');
		}

		const classTag = key === 'skill' ? 'skill-name' : 'qualification';
		const select = $(this)
			.closest(`.form-table__row.row-${key}`)
			.find(`.select-${classTag}`);

		listOptionSelected = updateListOptionSelected(
			parseInt(select.val()),
			null,
			listOptionSelected
		);

		if (key == 'skill') {
			handleSkillOptionsMarkup(listOptionSelected, skills);
		} else {
			handleQualificationOptionsMarkup(listOptionSelected);
		}

		$(this).closest(`.row-${key}`).remove();
	});

	return listOptionSelected;
}

function updateListOptionSelected(prevValue, currentValue, listOption) {
	if (currentValue !== null && !Number.isNaN(currentValue)) {
		listOption.push(currentValue);
	}

	if (listOption.includes(prevValue)) {
		listOption.splice(listOption.indexOf(prevValue), 1);
	}

	return listOption;
}

function generateQualificationOptionsMarkup(data) {
	const key = 'qualification';
	const listOptionSelected = getListOptionSelectedOfElement(key);
	handleQualificationOptionsMarkup(listOptionSelected);
	return generateOptions(data, key, listOptionSelected);
}

function generateSkillOptionsMarkup(data) {
	const key = 'skill';
	const listOptionSelected = getListOptionSelectedOfElement(key);
	handleSkillOptionsMarkup(listOptionSelected, data);
	return generateOptions(data, key);
}

function handleQualificationOptionsMarkup(listOptionSelected) {
	const key = 'qualification';
	showOptionSelect(key);
	$(`.form-table-${key} .select-${key} option`).each(function (index, item) {
		if (
			!$(item).is(':selected') &&
			listOptionSelected.includes(parseInt($(item).val()))
		) {
			$(item).addClass('d-none');
		}
	});
}

function handleSkillOptionsMarkup(listOptionSelected, skills) {
	showOptionSelect('skill');
	$(`.form-table-skill .select-skill-name option`).each(function (
		index,
		item
	) {
		const skillObj = skills.find((skill) => {
			return skill.id == $(item).val();
		});
		const skillCategoryIdOfNameSelect = skillObj?.category_id;

		const skillCategoryIdOfCategorySelect = getCategoryValueInSameRow(
			$(item)
		);

		const isSameCategory =
			skillCategoryIdOfNameSelect === null
				? skillCategoryIdOfCategorySelect === '-1'
				: skillCategoryIdOfNameSelect ==
				  skillCategoryIdOfCategorySelect;

		if ($(item).val() === '') {
			$(item).removeClass('d-none');
		} else if (
			!isSameCategory ||
			($(item).closest('select').attr('name').includes('[id]') &&
				listOptionSelected.includes(parseInt($(item).val())) &&
				!$(item).is(':selected'))
		) {
			$(item).addClass('d-none');
		}
	});
}

function getListOptionSelectedOfElement(key) {
	const listOptionSelected = [];
	const selectTag = key == 'skill' ? '.select-skill-name' : '.select-' + key;
	$(`.form-table-${key} ${selectTag} option:selected`).each(function (
		index,
		item
	) {
		const optionValue = parseInt($(item).val());
		if (key == 'qualification') {
			listOptionSelected.push(optionValue);
		} else if (
			key == 'skill' &&
			$(item).closest('select').attr('name').includes('[id]') &&
			!Number.isNaN(optionValue)
		) {
			listOptionSelected.push(optionValue);
		}
	});

	return listOptionSelected;
}

function showOptionSelect(key) {
	$(`.form-table-${key} select option`).removeClass('d-none');
}

function getCategoryValueInSameRow(nameOption) {
	const skillCategorySelect = nameOption
		.closest('tr.form-table__row.row-skill')
		.find('select.select-skill-category');
	return skillCategorySelect.find(':selected').val();
}

function generateOptions(items, key = '', listDataSelected = []) {
	return items
		.map((item) => {
			return `<option value="${item.id}" ${
				(key === 'qualification' &&
					listDataSelected.includes(item.id)) ||
				key === 'skill'
					? "class='d-none'"
					: ''
			}>${_.escape(item.name)}</option>`;
		})
		.join('');
}

function generateSkillCategoryOptions(categories, skills) {
	let options = categories
		.map((item) => {
			const category = i18next.t('skillCategory.' + _.escape(item.name));
			return `<option value="${item.id}">${category}</option>`;
		})
		.join('');
	const noRegisterString = i18next.t(
		'pages.staff.edit_cv.no_register_category'
	);
	options += isExistNullCategoryIdInSkills(skills)
		? `<option value="-1" exist-null-category>${noRegisterString}</option>`
		: '';
	return options;
}

function isExistNullCategoryIdInSkills(skills) {
	return skills.some((item) => item.category_id === null);
}

function generateProjectMarkup(processes, indexProject, count) {
	const processesNameMarkup = generateProcessesNameMarkup(processes);

	// const processesMarkup = generateProcessesMarkup(processes);
	const processCheckboxMarkup = generateProcessesCheckboxMarkup(
		processes,
		indexProject
	);

	const data = generateData(processes, indexProject);

	return `
	<div class="project-sort">
		<div class="sort-index d-block d-sm-none">
			<input class="sort-index__item" type="text" readonly value="${count + 1}">
		</div>
		<table class="table --bordered project-section">
			<tbody class="row-project">
						<tr>
							<th class="--w-14 --white">案件名</th>
							<td class="table__border name-project --right --p-3 ${isShowOptionFullWidth ? '' : 'd-flex border-0'}">
								<div class="form-table__input-wrapper lost-width">
									<input class="form-table__input d-inline-block --focus "
										name="projects[${indexProject}][name]" autocomplete="off" placeholder="${i18next.t(
		'pages.edit_cv.placeholder.projects.name'
	)}">
									<button type="button" class="btn btn-delete form-control btn-delete-project py-1 pe-0"
										><span>×</span></button>
								</div>
								<div class="options d-flex d-sm-none">
								<button type="button" class="options__btn">
									<i class="fas fa-ellipsis-h"></i>
								</button>
							</div>
							</td>
						</tr>
						<tr>
					<th>期間</th>
					<td class="p-0">
						<table class="no-border" width="100%">
							<tbody>
								<tr>
									<th class="nowrap --w-12"> 開始日</th>
									<td class="table__border --right --p-3">
										<div class="form-table__input-wrapper">
											<input class="form-table__input d-inline-block --focus date-picker"
												name="projects[${indexProject}][start_date]" value=""
												data-date-format="Y/MM" autocomplete="off"
												)}">
											<label class="label-date-picker"></label>
										</div>
									</td>
									<th class="nowrap --w-12"> 終了日</th>
									<td class="table__border --right --p-3">
										<div class="form-table__input-wrapper">
											<input class="form-table__input d-inline-block --focus date-picker"
												name="projects[${indexProject}][end_date]"
												data-date-format="Y/MM" autocomplete="off"
												)}">
											<label class="label-date-picker"></label>
										</div>
									</td>
								</tr>
							</tbody>
						</table>
					</td>
				</tr>
				<tr>
					<th>概要/ポイント</th>
					<td class="table__border --right --p-3">
						<div class="form-table__input-wrapper">
							<textarea class="area-input" name="projects[${indexProject}][description]" rows="5"
							placeholder="${i18next.t(
								'pages.edit_cv.placeholder.projects.description'
							)}"></textarea>
						</div>
					</td>
				</tr>
					<th class="--white">環境・言語</th>
					<td class="table__border --right --p-3">
						<div class="form-table__input-wrapper">
							<input class="form-table__input d-inline-block --focus "
								name="projects[${indexProject}][env_languages]" value="" autocomplete="off" placeholder="${i18next.t(
		'pages.edit_cv.placeholder.projects.env_languages'
	)}">
						</div>
					</td>
				</tr>
				<tr>
					<th class="--white">役割・役職</th>
					<td class="table__border --right --p-3">
						<div class="form-table__input-wrapper">
							<input class="form-table__input d-inline-block --focus " name="projects[${indexProject}][role]" autocomplete="off"
							placeholder="${i18next.t('pages.edit_cv.placeholder.projects.role')}">
						</div>
					</td>
				</tr>
				<tr>
					<th class="--white">規模・人数</th>
					<td class="table__border --right --p-3">
						<div class="form-table__input-wrapper">
							<input class="form-table__input d-inline-block --focus "
								name="projects[${indexProject}][number_of_people]" autocomplete="off" placeholder="${i18next.t(
		'pages.edit_cv.placeholder.projects.number_of_people'
	)}">
						</div>
					</td>
				</tr>
				<tr class="process-end new">
					<th class="--w-14 --white">担当工程</th>
					<td class="p-0">
						<table width="100%" class="no-border" style="table-layout: fixed">
						<tr class="--no-border-th d-none d-sm-table-row">
							${processesNameMarkup}
						</tr>
								${processCheckboxMarkup}
								${data}
						</table>

					</td>
				</tr>
			</tbody>
		</table>
		<div class="d-none d-sm-block sort-element">
			<span class="sort-element__close sort-element__item sort-element__item d-flex d-sm-none"><i class="fas fa-times"></i></span>
			<span class="sort-element__arrow sort-element__item" data='up'>
				<i class="fas fa-chevron-up"></i>
			</span>
			<input class="sort-element__number sort-element__item d-none d-sm-block" name="projects[${indexProject}][location_sort]" type="text" readonly="" value="${
		count + 1
	}">
			<span class="sort-element__arrow sort-element__item" data='down'>
				<i class="fas fa-chevron-down"></i>
			</span>
		</div>
	</div>	`;
}

function generateProcessesNameMarkup(processes) {
	return processes
		.map((process) => {
			return `
			<th class="th-subhead --no-border-th --white">
							${_.escape(process.name)}
							</th>`;
		})
		.join('');
}

function generateData(processes, index) {
	return processes
		.map((process, pIndex) => {
			return ` <tr class="d-table-row d-sm-none process-sm-width">
		<th class="th-subhead --no-border-th">
		${_.escape(process.name)}
		</th>

		<td class="--no-border-th --p-3">
			<label class="col-md-4 checkbox-round">
				<input type="checkbox" value="${_.escape(process.id)}" id="ckb-${index}-${
				pIndex + 1
			}${
				$(window).width() >= 576 ? '' : '-sm'
			}" name="projects[${index}][processes][]" old-name="projects[${index}][processes][]" autocomplete="off">
				<span class="text-xs">●</span>
			</label>
		</td>
	</tr>`;
		})
		.join('');
}

function generateProcessesMarkup(processes, companyIndex, index) {
	return processes
		.map((process) => {
			return `<td class="table__border --right --no-border-th text-center">
						<button type="button"
							class="btn btn-delete no-choose form-control px-4 ">
							&nbsp;
						</button>
					</td>
            `;
		})
		.join('');
}

function generateIdInputProcess(widthScreen) {
	if (widthScreen >= 576) {
		$('.process-sm-width').find('input').attr('name', '');
		setNameInputProcess('process-full-width');
	} else {
		$('.process-full-width').find('input').attr('name', '');
		setNameInputProcess('process-sm-width');
	}
}

function checkTypeCheckboxDisplay(screenWidth) {
	$(document)
		.find('.process-end.new')
		.each(function (index, item) {
			const checkboxElmFullWidth = $(item).find(
				'.process-full-width input[type=checkbox]'
			);
			const checkboxElmSmWidth = $(item).find(
				'.process-sm-width input[type=checkbox]'
			);

			const lists = isShowOptionFullWidth
				? checkboxElmFullWidth
				: checkboxElmSmWidth;

			handleUpdateNameCheckbox(lists);
		});
}

function handleUpdateNameCheckbox(listCheckbox) {
	listCheckbox.each(function (index, item) {
		const oldName = $(item).attr('old-name');
		$(item).attr('name', oldName);
	});
}

function setNameInputProcess(classElement) {
	$(`.${classElement}`)
		.find('input')
		.each(function (index, value) {
			const inputName = $(value).attr('name-input');
			$(value).attr('name', inputName);
		});
}

function generateProcessesCheckboxMarkup(processes, index) {
	const listProcess = processes
		.map((process, pIndex) => {
			return `
			<td class="--no-border-th --p-3">
				<label class="col-md-4 checkbox-round">
					<input type="checkbox" value="${_.escape(process.id)}" id="ckb-${index}-${
				pIndex + 1
			}${
				$(window).width() >= 576 ? '' : '-sm'
			}" name="projects[${index}][processes][]" old-name="projects[${index}][processes][]" autocomplete="off">
					<span class="text-xs">●</span>
				</label>
			</td>`;
		})
		.join('');

	return `<tr class="text-center d-none d-sm-table-row process-full-width">${listProcess}</tr>`;
}

function generateEducationMarkup(index) {
	return `<tr class="form-table__row row-education">
				<td class="table__border --right --p-3">
					<div class="form-table__input-wrapper">
						<input class="form-table__input d-inline-block --focus date-picker" value=""
							name="educations[${index}][end_date]" id="" type="text" data-date-format="Y年MM月" autocomplete="off" placeholder="${i18next.t(
		'pages.edit_cv.placeholder.educations.end_date'
	)}">
							<label class="label-date-picker"></label>
					</div>
				</td>
				<td class="table__border --right --p-3">
					<div class="form-table__input-wrapper">
						<input class="form-table__input d-inline-block --focus " value="" name="educations[${index}][name]" autocomplete="off" placeholder="${i18next.t(
		'pages.edit_cv.placeholder.educations.name'
	)}">
						<button type="button"
							class="btn btn-delete form-control btn-delete-education py-1 pe-0"><span>×</span></button>
					</div>
				</td>
			</tr>`;
}

function generateQualificationMarkup(qualificationOptionMarkup, index) {
	return `<tr class="form-table__row row-qualification">
				<td class="table__border --right --p-3">
					<div class="form-table__input-wrapper">
						<input class="form-table__input d-inline-block --focus date-picker" value=""
							name="resume[qualifications][${index}][option_at]" data-date-format="Y年MM月" autocomplete="off" placeholder="${i18next.t(
		'pages.edit_cv.placeholder.qualifications.option_at'
	)}">
							<label class="label-date-picker"></label>
					</div>
				</td>
				<td class="table__border --right --p-3">
					<div class="form-table__input-wrapper">
						<select class="select-box --input-table select-qualification placeholder-select" name="resume[qualifications][${index}][id]" required>
							<option value="" disabled selected>${i18next.t(
								'pages.staff.edit_cv.select_qualification'
							)}</option>
							${qualificationOptionMarkup}
						</select>
						<span class="select-box-label"></span>
					</div>
				</td>
				<td class="text-center -delete --p-3 col-delete">
					<button type="button" class="btn btn-delete form-control btn-delete-qualification"><span>×</span></button>
				</td>
			</tr>`;
}

function generateSkillMarkup(
	skillCategoryOptionMarkup,
	skillOptionMarkup,
	skillLevelOptionMarkup,
	index
) {
	return `<tr class="form-table__row row-skill">
				<td class="table__border --right --p-3">
					<div class="form-table__input-wrapper">
						<select class="select-box --input-table select-skill-category" name="resume[skills][${index}][category_id]" required>
							<option value="" disabled selected>${i18next.t(
								'pages.staff.edit_cv.select_skill_category'
							)}</option>
							${skillCategoryOptionMarkup}
						</select>
						<span class="select-box-label"></span>
					</div>
				</td>
				<td class="table__border --right --p-3">
					<div class="form-table__input-wrapper">
						<select class="select-box --input-table select-skill-name" name="resume[skills][${index}][id]" required>
							<option value="" disabled selected>${i18next.t(
								'pages.staff.edit_cv.select_skill_category'
							)}</option>
							${skillOptionMarkup}
						</select>
						<span class="select-box-label"></span>
					</div>
				</td>
				<td class="table__border --right --p-3">
					<div class="form-table__input-wrapper">
						<select class="select-box --input-table select-skill-level select-center" name="resume[skills][${index}][level_id]" required>
							<option value="" disabled selected>${i18next.t(
								'pages.staff.edit_cv.select_skill_level'
							)}</option>
							${skillLevelOptionMarkup}
						</select>
						<span class="select-box-label"></span>
					</div>
				</td>
				<td class="text-center -delete --p-3 col-delete">
					<input class="d-none" name="resume[skills][${index}][none]" value="" />
					<button type="button" class="btn btn-delete form-control btn-delete-skill"><span>×</span></button>
				</td>
			</tr>`;
}

$(document).on('click', '.btn-delete-project', function () {
	$(this).closest('.project-sort').remove();
	$('.btn-add-project').data(
		'index',
		$('.btn-add-project').data('index') - 1
	);
	$('.project-sort').each((index, value) => {
		$(value)
			.find('.sort-element__number')
			.attr('value', index + 1);
	});
	checkCountProject();
	disableArrow();
});

$(document).on('click', '.btn-delete-education', function () {
	const educationCount = $('.row-education').length;
	$(this).closest('.row-education').remove();
});

$(document).on('click', '.clear-area-input', function () {
	$(this).closest('div').find('textarea').val('');
});

$(document).on('click', ".sort-element__arrow[data='up']", function () {
	let elSort = $(this).closest('.sort-element');
	changeLocationUp(elSort);
	disableArrow();
});

$(document).on('click', ".sort-element__arrow[data='down']", function () {
	let elSort = $(this).closest('.sort-element');
	changeLocationDown(elSort);
	disableArrow();
});

function disableArrow() {
	$('.sort-element .sort-element__number').each((index, value) => {
		const arrowUp = $(value)
			.closest('.sort-element')
			.find(".sort-element__arrow[data='up']");
		const arrowDown = $(value)
			.closest('.sort-element')
			.find(".sort-element__arrow[data='down']");
		if ($(value).val() == 1) {
			arrowUp.addClass('disabled');
		} else {
			arrowUp.removeClass('disabled');
		}
		if ($(value).val() == $('.sort-element .sort-element__number').length) {
			arrowDown.addClass('disabled');
		} else {
			arrowDown.removeClass('disabled');
		}
	});
}

disableArrow();
checkCountProject();

function updateWidthNameProject(isFullWidth) {
	if (isFullWidth) {
		$('.name-project').removeClass('d-flex border-0');
		$('.name-project')
			.find('.form-table__input-wrapper')
			.removeClass('lost-width');
	} else {
		$('.name-project').addClass('d-flex border-0');
		$('.name-project')
			.find('.form-table__input-wrapper')
			.addClass('lost-width');
	}
}

function changeLocationUp(elCurrent) {
	let elNumberCurrent = elCurrent.find('.sort-element__number');
	let elChange = $(
		`.sort-element__number[value='${+elNumberCurrent.val() - 1}']`
	);
	const numberCurrent = elNumberCurrent.val();
	const numberChange = +elNumberCurrent.val() - 1;

	elCurrent
		.closest('.project-sort')
		.insertBefore(elChange.closest('.project-sort'));
	elChange.attr('value', numberCurrent);
	elNumberCurrent.attr('value', numberChange);

	elChange
		.closest('.project-sort')
		.find('.sort-index .sort-index__item')
		.attr('value', numberCurrent);
	elNumberCurrent
		.closest('.project-sort')
		.find('.sort-index .sort-index__item')
		.attr('value', numberChange);
}

function changeLocationDown(elCurrent) {
	let elNumberCurrent = elCurrent.find('.sort-element__number');
	let elChange = $(
		`.sort-element__number[value='${+elNumberCurrent.val() + 1}']`
	);
	const numberCurrent = elNumberCurrent.val();
	const numberChange = +elNumberCurrent.val() + 1;

	elCurrent
		.closest('.project-sort')
		.insertAfter(elChange.closest('.project-sort'));
	elChange.attr('value', numberCurrent);
	elNumberCurrent.attr('value', numberChange);

	elChange
		.closest('.project-sort')
		.find('.sort-index .sort-index__item')
		.attr('value', numberCurrent);
	elNumberCurrent
		.closest('.project-sort')
		.find('.sort-index .sort-index__item')
		.attr('value', numberChange);
}

function checkCountProject() {
	if ($('.sort-element').length == 1) {
		$('.sort-element').addClass('d-none');
	} else {
		$('.sort-element').removeClass('d-none');
	}
}
