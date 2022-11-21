import ResponseCode from '../../constants/response-codes';
import { getRepository } from '../../repositories/repository-factory';
import bindEditCvDatepicker from '../../components/staff/edit-cv-datepicker';
import loading from '../../components/shared/loading';

const userRepository = getRepository('user');
let step = 0;
let previousHtmlTabEditCv = '';

$(document).ready(function () {
	previousHtmlTabEditCv = getPreviousHtmlTabEditCv();

	$(document).on('click', '#btn-go-to-edit-cv', function (e) {
		goToEditCv();
	});

	$(document).on('click', '.btn.btn-save', function () {
		$(document).find('form.form-edit-cv').submit();
	});

	$(document).on('submit', 'form.form-edit-cv', async function (e) {
		try {
			e.preventDefault();
			const staffId = $(this).data('staff-id');
			const data = new FormData(e.target);
			clearValidationError();
			loading.show();

			const response = await userRepository.updateCv(staffId, data);

			if (step == 1) {
				goToConfirmEditCv();
				return;
			}

			toastr.success(i18next.t(`staff.update_cv_success`));
			window.location.reload();
			setTimeout(() => {
				loading.hide();
			}, 1000);
		} catch (error) {
			loading.hide();
			if (error.response.status === ResponseCode.UNPROCESSABLE_ENTITY) {
				generateValidationError(error.response.data.errors);
				return;
			}

			toastr.error(i18next.t(`staff.update_cv_fail`));
		}
	});

	$(document).on('click', '#edit-cv-back-btn', function () {
		if (step === 1) {
			backToDetailCv();
		}

		if (step === 2) {
			backToEditCv();
		}
	});

	$(document).on('click', '#cv-user-tab', function () {
		backToDetailCv();
	});
});

function getPreviousHtmlTabEditCv() {
	return $('.tab-edit-cv').html();
}

function inProfilePage() {
	return $('.tabs-block').data('page').includes('profile');
}

$(document).ready(function () {
	addAddedItemClassToBreadcrumb();
});
function addAddedItemClassToBreadcrumb() {
	$('ol.breadcrumb')
		.find('li')
		.each((index, item) => {
			if (index > 1) {
				$(item).addClass('added-item');
			}
		});
}

function goToEditCv() {
	step = 1;
	$('.tab-show-cv').fadeOut();
	$('.tab-edit-cv').removeClass('d-none').fadeIn();
	bindEditCvDatepicker();
	$('form.form-edit-cv').find('.btn-save').text('確認');
	$('.main-content-heading-main__content').html(
		'<h1 class="m-0 text-2xl">経歴書情報の更新 <i class="fas fa-pen"></i></h1>'
	);
	$('.main-content-heading-main__note').html('');
	$('.added-item').remove();
	$('.card__title.title-table').addClass('title-center');

	if (inProfilePage()) {
		$('ol.breadcrumb').append(
			'<li class="breadcrumb-item active added-item">経歴書情報</li>'
		);
		$('ol.breadcrumb').append(
			'<li class="breadcrumb-item active added-item">経歴書情報の更新</li>'
		);
	} else {
		$('ol.breadcrumb').append(
			'<li class="breadcrumb-item active added-item">経歴書情報の更新</li>'
		);
	}
}

function backToDetailCv() {
	step = 0;
	$('.tab-edit-cv').addClass('d-none').fadeOut();
	$('.card__title.title-table').removeClass('title-center');
	$('.tab-show-cv').fadeIn();
	backToPreviousEditCvPage();
	$('.main-content-heading-main__content').html(
		'<h1 class="m-0 text-2xl">要員情報の詳細</h1>'
	);
	$('.main-content-heading-main__note').html(``);
	addAddedItemClassToBreadcrumb();
	$('.added-item').remove();

	if (inProfilePage()) {
		$('ol.breadcrumb').append(
			'<li class="breadcrumb-item active added-item">経歴書情報</li>'
		);
	} else {
		$('ol.breadcrumb').append(
			'<li class="breadcrumb-item active added-item">経歴書情報</li>'
		);
	}
	// $('li.breadcrumb-item.item-render:last').text('経歴書情報');
}

function backToPreviousEditCvPage() {
	$('.tab-edit-cv').html(previousHtmlTabEditCv);
}

function backToEditCv() {
	$('.sort-element').removeClass('d-none');
	step = 1;
	scrollToTop();
	$('.card-form-table').removeClass('--confirm');
	$('.card__title.title-table').addClass('title-center');
	$('.now-date').addClass('d-none');
	$('form.form-edit-cv').find('input[name="is_confirm"]').val(1);
	$('.card-form-table').find(':input').attr('readonly', false);
	$('form.form-edit-cv').find('.btn-save').text('確認');
	$('.main-content-heading-main__content').html(
		'<h1 class="m-0 text-2xl">経歴書情報の更新 <i class="fas fa-pen"></i></h1>'
	);
	$('.main-content-heading-main__note').html(``);

	$('.added-item').remove();
	if (inProfilePage()) {
		$('ol.breadcrumb').append(
			'<li class="breadcrumb-item active added-item">Profile edit cv</li>'
		);
	} else {
		$('ol.breadcrumb').append(
			'<li class="breadcrumb-item active added-item">Edit cv</li>'
		);
	}
}

function goToConfirmEditCv() {
	$('.sort-element').addClass('d-none');
	step = 2;
	scrollToTop();
	$('.card__title.title-table').removeClass('title-center');
	$('.now-date').removeClass('d-none');
	$('form.form-edit-cv').find('input[name="is_confirm"]').val(0);
	$('.card-form-table').addClass('--confirm');
	$('.card-form-table').find(':input').attr('readonly', true);
	$('form.form-edit-cv').find('.btn-save').text('保存');
	$('.main-content-heading-main__content').html(
		'<h1 class="m-0 text-2xl">更新内容の確認</h1>'
	);
	$('.main-content-heading-main__note').html(
		`<p>更新内容をご確認の上、間違いがなければ画面下の「保存」ボタンを押してください。</p>`
	);

	$('.added-item').remove();
	if (inProfilePage()) {
		$('ol.breadcrumb').append(
			'<li class="breadcrumb-item active added-item">経歴書情報</li>'
		);
		$('ol.breadcrumb').append(
			'<li class="breadcrumb-item active added-item">経歴書情報の更新</li>'
		);
	} else {
		$('ol.breadcrumb').append(
			'<li class="breadcrumb-item active added-item">経歴書情報の更新</li>'
		);
	}

	setTimeout(() => {
		loading.hide();
	}, 500);
}

$(document).on('click', '.checkbox-round input', function (e) {
	const tagParentIsTrFullWidth = $(this).closest(
		'tr.process-full-width'
	).length;
	const elmParent = $(this).closest('tbody');
	const listCheckboxOfTagTrFullWidth = elmParent.find(
		'tr:nth-child(2) input'
	);
	const listCheckboxOfTagTrSmWidth = elmParent
		.find('tr')
		.not('tr:nth-child(1), tr:nth-child(2)')
		.find('input');

	handleSyncChecked(
		tagParentIsTrFullWidth,
		listCheckboxOfTagTrFullWidth,
		listCheckboxOfTagTrSmWidth
	);
});

function handleSyncChecked(isTrue, listFullWidth, listSmWidth) {
	const listItemChecked = {};
	const listLoopOne = isTrue ? listFullWidth : listSmWidth;
	const listLoopTwo = isTrue ? listSmWidth : listFullWidth;

	listLoopOne.each(function (index, item) {
		listItemChecked[index] = $(item).prop('checked');
	});

	listLoopTwo.each(function (index, item) {
		if (listItemChecked[index]) {
			$(item).prop('checked', true);
		} else {
			$(item).prop('checked', false);
		}
	});
}

function scrollToTop() {
	$('html, body').animate({ scrollTop: 0 }, 'fast');
}

function clearValidationError() {
	$('.validation-error').remove();
	$('form.form-edit-cv').find('.--error').removeClass('--error');
}

function generateValidationError(errors) {
	let isFirstError = false;
	const generatedErrors = {};

	$('.card-form-table')
		.find(':input')
		.each((index, input) => {
			const name = $(input)
				.attr('name')
				?.replaceAll('[]', '')
				?.replaceAll('[', '.')
				?.replaceAll(']', '');

			if (!errors[name]) return;

			$(input).closest('.form-table__input-wrapper').addClass('--error');
			$(input).closest('.checkbox-round').addClass('--error');

			if (generatedErrors[name]) {
				return;
			}
			generatedErrors[name] = 1;
			const table = $(input).closest('.table')[0];
			const errorMarkup = generateErrorMarkup(errors[name][0]);
			if (
				!$(table).closest('div').find('.form-table__button-group')
					.length
			) {
				$(errorMarkup).insertBefore($('.group-btn-project'));
			} else {
				$(errorMarkup).insertBefore(
					$(table).closest('div').find('.form-table__button-group')
				);
			}

			if (!isFirstError) {
				isFirstError = true;
				table?.scrollIntoView();
			}
		});
}

function generateErrorMarkup(message) {
	return `<p class="validation-error" name="user.last_name">${message}</p>`;
}

$('.nav-link').on('click', function () {
	$('.added-item').remove();
});
