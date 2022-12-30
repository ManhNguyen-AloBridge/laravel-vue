require('../../plugins/moment');
import { getRepository } from '../../repositories/repository-factory';
import loading from '../../components/shared/loading';

const userRepository = getRepository('user');
let header = [
	{
		title: i18next.t('layout.header.profile.setting_profile'),
		route: window.location.href,
	},
	{
		title: i18next.t('layout.header.profile.basic_info'),
	},
];

$('document').ready(function () {
	$('html,body').animate({ scrollTop: 0 }, 500);
});

(async function () {
	const userId = $('#user-id').val();
	let isConfirm = true;

	renderHeaderBreadsScrum($('#step').val());

	const staff = await getDataStaff(userId);

	renderDataInfo(staff, $('.item-info'), 'p');

	$('#btn-edit').on('click', function () {
		$('.form__group').find('.badge').removeClass('d-none');
		handleClickBtnEdit(staff);
	});

	$('.btn-back').on('click', function () {
		const step = $('#step').val();
		handleBackStep(staff, isConfirm, step);
		$('.form__group').find('.badge').addClass('d-none');

		if (step == 3) {
			isConfirm = true;
			$('.form__group').find('.badge').removeClass('d-none');
		}
	});

	$('#form-update-profile').on('submit', async function (e) {
		e.preventDefault();
		const step = $('#step').val();

		$('select').map((index, item) => {
			const nameAttrItemSelect = $(item).attr('name');
			const nameOptionSelected = $(item).find('option:selected').text();
			$(`#name_${nameAttrItemSelect}`).val(nameOptionSelected);
		});

		if (step == 2) {
			setTimeout(() => {
				loading.hide();
			}, 500);
		}

		const result = await handleSubmitForm(userId, isConfirm, e.target);

		changeTextBtn(step);

		if (result) {
			if (!isConfirm) {
				location.reload();
				return;
			}

			isConfirm = !isConfirm;
		}
		window.scrollTo(0, 0);
	});

	$('.tabs-block .nav-link').on('click', function () {
		handleSwitchTab();
	});
})();

async function getDataStaff(data) {
	const response = await userRepository.getDetail(data);
	const { staff } = response.data;

	staff['zipcode'] = staff['zipcode'] ? `〒${staff['zipcode']}` : null;
	staff['gender'] = i18next.t(`gender.${staff.gender}`);
	staff['is_spouse'] = i18next.t(`isSpouse.${staff.is_spouse}`);
	staff['birthdate'] = staff['birthdate']
		? moment(staff.birthdate, false).format('YYYY/MM/DD')
		: '';
	staff['joined_at'] = staff['joined_at']
		? moment(staff.joined_at, false).format('YYYY/MM/DD')
		: '';
	staff['leaved_at'] = staff['leaved_at']
		? moment(staff.leaved_at, false).format('YYYY/MM/DD')
		: '';
	return staff;
}

async function handleSubmitForm(userId, isConfirm, target) {
	try {
		removeErrorMsg();

		const formData = Object.fromEntries(new FormData(target).entries());

		const data = {
			user: {
				is_confirm: isConfirm,
				user: formData,
				user_id: userId,
				user_position: {
					department_position_id: formData['department_position_id'],
					department_id: formData['department_id'],
				},
			},
		};

		const response = await userRepository.updateInfo(data);

		if (isConfirm) {
			$('.form__group').find('.badge').addClass('d-none');
			$('#step').val(3);
			const step = $('#step').val();
			$('.main-content-heading-main__content').addClass('u-width-200');

			removeClassToForm();
			renderHeaderBreadsScrum(3);
		}

		renderDataInfo(formData, $('.item-info'), 'p');

		if (!isConfirm) {
			toastr.success(response.data.messages);
		}

		return true;
	} catch (error) {
		loading.hide();
		$('#step').val(2);
		$('.main-content-heading-main__content').removeClass('u-width-200');

		if (error.response?.status == 500) {
			toastr.error(error.response.data.errors.messages);
		}

		renderErrorResponse(error);
		return false;
	}
}

function renderHeaderBreadsScrum(step) {
	removeItemRender();
	let currentUrl = window.location.href;

	if (currentUrl.includes('#')) {
		currentUrl = currentUrl.slice(0, currentUrl.indexOf('#'));
	}

	if (step == 1) {
		$('.item-render').remove();

		header = [
			{
				title: i18next.t('layout.header.profile.setting_profile'),
				route: currentUrl,
			},
			{
				title: i18next.t('layout.header.profile.basic_info'),
			},
		];
	}

	if (step == 2) {
		header.pop();

		if (header.length == 1) {
			header.push({
				title: i18next.t('layout.header.profile.basic_info'),
				route: currentUrl,
			});
		}

		header.push({
			title: i18next.t('layout.header.profile.edit_basic_info'),
		});

		changeInnerTitleContentPage(step);
	}

	if (step == 3) {
		header.pop();
		header.push({
			title: i18next.t('layout.header.profile.confirm_edit_basic_info'),
		});

		changeInnerTitleContentPage(step);
	}

	let listItemHeader = '';

	header.forEach((item, index) => {
		listItemHeader =
			listItemHeader +
			` <li class="breadcrumb-item item-render">
	                       ${
								item.route
									? `<a class="link --dark" href="${item.route}">${item.title}</a>`
									: `${item.title}`
							}
	                    </li>

				`;
	});

	$('.breadcrumb .breadcrumb-item').after(listItemHeader);
}

function handleSwitchTab() {
	$('.tabs-block .nav-link').map((index, item) => {
		if (index == 0) {
			const firstItemId = $(item).attr('id');
			const currentItemId = $(this).attr('id');
			if (firstItemId != currentItemId) {
				$('#step').val(1);
			}
		}
	});

	const step = $('#step').val();

	handleShowHeaderHiddenFooter(step);
	changeInnerTitleContentPage(step);
	renderHeaderBreadsScrum(step);
	removeClassToForm();
}

function changeInnerTitleContentPage(step) {
	const innerTitle = $('.main-content-heading-main__content');
	innerTitle.find('h1').remove();

	if (step == 2) {
		innerTitle.append(`
		<h1 class="m-0 text-2xl">${i18next.t(
			'pages.profile.edit_basic_info'
		)}<i class="fas fa-pen"></i></h1>
		`);

		removeNoteTitle();

		return;
	}

	if (step == 3) {
		innerTitle.append(`
		<h1 class="m-0 text-2xl">${i18next.t(
			'pages.profile.confirm_edit_basic_info'
		)}</h1>
		`);

		removeNoteTitle();
		$('.main-content-heading-main__note').append(
			`<p>${i18next.t('pages.profile.note_title')}</p>`
		);

		return;
	}

	removeNoteTitle();
	innerTitle.append(`
	<h1 class="m-0 text-2xl">${i18next.t('pages.profile.setting_profile')}</h1>
		`);
}

function renderDataInfo(data, itemInfo, tag) {
	const step = $('#step').val();

	if (step == 3) {
		data = reRenderValueOption(data);
	}

	itemInfo.map(function (index, item) {
		if (tag == 'input') {
			const fieldInputEdit = $(item).find('.input-edit');
			const idFieldInputEdit = fieldInputEdit.attr('id');
			if (!idFieldInputEdit) {
				return;
			}
			fieldInputEdit.val(data[idFieldInputEdit]);
		}

		if (tag == 'p') {
			let keyDataInfo = $(item).attr('data-info');

			$(item).find(tag).text(data[keyDataInfo]);
		}
	});
}

function reRenderOption(staff) {
	$('.item-info select.select-box').map((index, item) => {
		const textValueDefault = staff[$($(item)[0]).attr('name')];
		$($(item)[0])
			.find('option')
			.map((index, option) => {
				const textValueOption = $(option).text().trim();
				if (textValueOption == textValueDefault) {
					$(option).prop('selected', true);
				}
			});
	});
}

function renderErrorResponse(error) {
	const errors = error.response?.data?.errors;

	$('.item-info').map(function (index, item) {
		const fieldInputData = $(item).find('.form__input');

		if (errors[`user.${fieldInputData.attr('id')}`]) {
			fieldInputData.after(
				`<p class="validation-error">${
					errors[`user.${fieldInputData.attr('id')}`]
				}</p>`
			);
		}
	});
	handleHiddenHeaderShowFooter();
}

function reRenderValueOption(data) {
	$('.item-info .text-option-selected').each((index, item) => {
		const keyData = $(item).attr('id').slice(5);
		data[keyData] = data[$(item).attr('id')];
		delete data[$(item).attr('id')];
	});
	return data;
}

function changeTextBtn(step) {
	if (step == 3 || step == 1) {
		$('#btn-submit').html(i18next.t('common.btn-confirm'));
		return;
	}

	$('#btn-submit').html(i18next.t('common.btn-register'));
}

function handleClickBtnEdit(staff) {
	const step = $('#step').val();
	$('#step').val(2);

	changeTextBtn(step);
	addClassToForm();
	renderDataInfo(staff, $('.item-info'), 'input');
	reRenderOption(staff);
	renderHeaderBreadsScrum(2);
	handleHiddenHeaderShowFooter();
}

function removeErrorMsg() {
	$('.validation-error').remove();
}

function removeItemRender() {
	$('.item-render').remove();
}

function removeNoteTitle() {
	if ($('.main-content-heading-main__note p').length) {
		$('.main-content-heading-main__note p').remove();
	}
}

function handleHiddenHeaderShowFooter() {
	$('.content-right-header__detail-info').addClass('d-none');
	$('.content-right__footer').removeClass('d-none');
}

function handleShowHeaderHiddenFooter(step) {
	if (step == 1) {
		$('.content-right-header__detail-info').removeClass('d-none');
		$('.content-right__footer').addClass('d-none');
	}
}

function handleBackStep(staff, isConfirm, step) {
	if (step == 2) {
		$('#step').val(1);
		handleShowHeaderHiddenFooter(1);
		renderDataInfo(staff, $('.item-info'), 'p');
		changeInnerTitleContentPage(1);
		renderHeaderBreadsScrum(1);
		removeClassToForm();
	}
	if (step == 3) {
		$('#step').val(2);
		renderHeaderBreadsScrum(2);
		handleHiddenHeaderShowFooter();
		addClassToForm();
		$('.main-content-heading-main__content').removeClass('u-width-200');
	}

	changeTextBtn(step);

	removeErrorMsg();
}

function removeClassToForm() {
	$('#form-update-profile').removeClass('form-update');
	$('.form__label').removeClass('ps-0');
}

function addClassToForm() {
	$('#form-update-profile').addClass('form-update');
	$('.form__label').addClass('ps-0');
	$('.only-show .form__label').removeClass('ps-0');
}
