import { getRepository } from '../../repositories/repository-factory';
import loading from '../../components/shared/loading';

const maintenanceRepository = getRepository('maintenance');
const formDelete = $('form[modal-id=confirm-delete-maintenance]');
const formAdd = $('#form-add');
const formUpdate = $('#form-update');
const formConfirmFinish = $('form[modal-id=confirm-finish-maintenance]');
const btnBack = $('.btn-back');
const btnSave = $('.btn-save-maintenance');
let isHaveMaintenance = false;
let step = 0;

$('#btn-add-maintenance').on('click', function () {
	removeErrors();
	reverseStatusModal();
	$('.date-time-picker').attr('autocomplete', 'off');
	$('#form-add input').val('');
});

$('#btn-close').on('click', function () {
	removeErrors();
});

$('.maintenance-emergency').change(function () {
	const isChecked = $(this).is(':checked');
	const inputStartDate = $(this)
		.closest('form')
		.find('input[name=start_date]');

	if (isChecked) {
		step = 1;
		inputStartDate.val('');
		inputStartDate.attr('disabled', isChecked);
		btnSave.text(i18next.t('common.btn-confirm'));
	} else {
		step = 0;
		inputStartDate.attr('disabled', isChecked);
		btnSave.text(i18next.t('common.btn-save'));
	}
});

btnBack.on('click', function () {
	if (step == 2) {
		step = 1;
		handleBackStep();
	}
});

$(document).on('submit', '#form-add', async function (e) {
	try {
		e.preventDefault();
		removeErrors();

		const isEmergency = $(this)
			.find('.maintenance-emergency')
			.is(':checked');
		const data = Object.fromEntries(new FormData(e.target).entries());

		data.emergency = isEmergency;
		data.isConfirm = step == 2 ? !isEmergency : isEmergency;

		const dataResponse = await maintenanceRepository.store(data);

		if (step == 1) {
			step = 2;

			btnBack.removeAttr('data-bs-dismiss');

			setTimeout(() => {
				handleNextStep();
				loading.hide();
			}, 300);
			return;
		}

		$('#add-maintenance').modal('toggle');

		setTimeout(() => {
			loading.hide();
			location.reload();
		}, 1000);

		toastr.success(dataResponse.data);
	} catch (error) {
		setTimeout(() => {
			loading.hide();
		}, 300);

		generateValidationError(error.response.data.errors, formAdd);
	}
});

$(document).on('click', '.btn-confirm-delete', function () {
	const idItem = $(this).attr('id-item');
	const itemParent = $(this).parent().parent();
	const startDate = $(itemParent.find('p[key-value=start-date]')[0]).text();
	const endDate = $(itemParent.find('p[key-value=end-date]')[0]).text();
	const messageText = i18next
		.t('pages.maintenance.confirm_delete_content')
		.replace(':start_date', startDate)
		.replace(':end_date', endDate);

	formDelete.find('#msg-confirm-delete').text(messageText);

	formDelete.attr('action', formDelete.attr('action').replace('id', idItem));
});

$(document).on('click', '.btn-confirm-finish', function () {
	const idItem = $(this).attr('id-item');

	formConfirmFinish.attr(
		'action',
		formConfirmFinish.attr('action').replace('id', idItem)
	);
});

$(document).on('click', '.btn-confirm-update', function () {
	reverseStatusModal();
	removeErrors();
	removeStatusDisabledInputOnForm('form-update');

	$('#id-maintenance').val($(this).attr('id-item'));
	const tagTr = $(this).parent().parent();
	const isActive = tagTr.find('.status').attr('class').includes('--active');

	disabledCheckbox(isHaveMaintenance);

	tagTr.find('p').each(function (index, item) {
		const keyValue = $(item).attr('key-value').replace('-', '_');
		const value = $(item).text();
		formUpdate.find(`.form__input[name=${keyValue}]`).attr('value', value);
		const element = $(formUpdate.find(`.form__input[name=${keyValue}]`));
		const tagNameElement = element.prop('tagName').toLowerCase();

		const idElement = element.attr('id');

		if (idElement == `field-update-${keyValue.replace('_', '-')}`) {
			setDateForDateRangePicker(idElement, value);
		}

		if (tagNameElement == 'textarea') {
			element.val(value);
		}
	});

	if ($(tagTr.find('span')[0]).attr('class').includes('--active')) {
		$('#field-update-start-date').attr('disabled', 'disabled');
	}
});

$(document).on('submit', '#form-update', async function (e) {
	try {
		e.preventDefault();
		removeErrors();
		const isEmergency = $(this)
			.find('.maintenance-emergency')
			.is(':checked');

		const data = Object.fromEntries(new FormData(e.target).entries());

		data.emergency = isEmergency;
		data.isConfirm = step == 2 ? !isEmergency : isEmergency;

		const dataResponse = await maintenanceRepository.update(data);

		if (step == 1) {
			step = 2;

			btnBack.removeAttr('data-bs-dismiss');

			setTimeout(() => {
				handleNextStep();
				loading.hide();
			}, 300);
			return;
		}

		$('#update-maintenance').modal('toggle');

		setTimeout(() => {
			loading.hide();
			location.reload();
		}, 1000);

		toastr.success(dataResponse.data);
	} catch (error) {
		setTimeout(() => {
			loading.hide();
		}, 300);

		generateValidationError(error.response.data.errors, formUpdate);
	}
});

function checkMaintenance() {
	$(document)
		.find('.status')
		.each(function (index, item) {
			if ($(item).attr('class').includes('--active')) {
				isHaveMaintenance = true;
				return;
			}
		});

	disabledCheckbox(isHaveMaintenance);
}

function disabledCheckbox(isDisabled) {
	if (isDisabled) {
		$('#form-update .checkbox input').prop('disabled', true);
		$('#form-add .checkbox input').prop('disabled', true);
	} else {
		$('#form-update .checkbox input').prop('disabled', false);
		$('#form-add .checkbox input').prop('disabled', false);
	}
}

function reverseStatusModal() {
	$('input[name=start_date]')
		.prop('disabled', false)
		.removeAttr('disabled', false);
	$('.maintenance-emergency')
		.prop('checked', false)
		.removeAttr('checked', 'checked');
}

function handleNextStep() {
	btnSave.text(i18next.t('common.btn-save'));
	$('.create-maintenance').addClass('d-none');
	$('.confirm-maintenance').removeClass('d-none');
}

function handleBackStep() {
	btnSave.text(i18next.t('common.btn-confirm'));
	$('.create-maintenance').removeClass('d-none');
	$('.confirm-maintenance').addClass('d-none');
	btnBack.attr('data-bs-dismiss', 'modal');
}

function setDateForDateRangePicker(element, value) {
	$(`#${element}`).data('daterangepicker').setStartDate(value);
	$(`#${element}`).val(value);
	$(`#${element}`).data('daterangepicker').setEndDate(value);
}

function generateValidationError(errors, formItem) {
	const listInputInForm = formItem.find('.form__input');

	listInputInForm.each(function (index, item) {
		const nameField = $(item).attr('name');
		if (errors[nameField]) {
			$(item).after(
				`<p class="validation-error" id="${index}"> ${errors[nameField][0]}</p>`
			);
		}
	});
}

function removeErrors() {
	$('.validation-error').remove();
}

function removeStatusDisabledInputOnForm(formId) {
	$(`#${formId}`).find('input').removeAttr('disabled');
}

checkMaintenance();
