import { getRepository } from '../../repositories/repository-factory';
import loading from '../../components/shared/loading';

const companyRepository = getRepository('company');
const btnChange = $('#btn-change');
const btnCancelChange = $('#btn-cancel-change');
const btnConfirm = $('#btn-confirm');
const btnSave = $('#btn-save');
const btnCancelConfirm = $('#btn-cancel-confirm');
const textIndex = $('#text-index');
const textEdit = $('#text-edit');
const dataCompany = $('form#info-company-tab');
const infoCompany = $('.info-company__body');
const input = $(':input.form__input');
const textConfirm = $('#text-confirm');
const inputPriceDefault = $('#price').text();
const inputPriceSelected = $('#price-selected');

$('document').ready(function () {
	inputPriceSelected.val($('#select-box-price option:selected').text());
});

btnChange.on('click', function () {
	btnConfirm.removeClass('d-none');

	btnChange.addClass('d-none');

	textIndex.addClass('d-none');

	textEdit.removeClass('d-none');

	btnCancelChange.removeClass('d-none');

	dataCompany.removeClass('form-read-only');
});

btnChange.on('click', function () {
	btnConfirm.removeClass('d-none');
	btnChange.addClass('d-none');
	textIndex.addClass('d-none');
	textEdit.removeClass('d-none');
	btnCancelChange.removeClass('d-none');
	dataCompany.removeClass('form-read-only');
});

btnCancelChange.on('click', async function () {
	try {
		const companyId = $('input[name=company_id]').val();

		const data = {
			company_id: companyId,
		};
		const res = await companyRepository.getDetail(data);
		$.each(res.data.company, function (key, value) {
			infoCompany.find(`input[name="${key}"]`).val(value);
			$(`#${key}`).text(value);
		});
		$(`#price`).text(inputPriceDefault);
		$('.validation-error').remove();
		btnConfirm.addClass('d-none');
		btnCancelChange.addClass('d-none');
		btnChange.removeClass('d-none');
		textIndex.removeClass('d-none');
		textEdit.addClass('d-none');
		dataCompany.addClass('form-read-only');
		$(`.form__input`).removeClass('--error');
	} catch (err) {
		toastr.error(err);
	}
});

btnCancelConfirm.on('click', function () {
	textEdit.removeClass('d-none');
	textConfirm.addClass('d-none');
	btnCancelChange.removeClass('d-none');
	btnCancelConfirm.addClass('d-none');
	btnConfirm.removeClass('d-none');
	btnSave.addClass('d-none');
	dataCompany.removeClass('form-read-only');
});

$('#select-box-price').on('change', function () {
	inputPriceSelected.val($('#select-box-price option:selected').text());
});

$('#info-company-tab').on('submit', async function (e) {
	try {
		e.preventDefault();
		const data = Object.fromEntries(new FormData(e.target).entries());
		const result = await companyRepository.handleSAdminUpdate(data);
		$.each(result.data.company, function (key, value) {
			if (key == 'price') {
				const valuePrice = inputPriceSelected.val();
				$(`#${key}`).text(valuePrice);
			} else {
				infoCompany.find(`input[name="${key}"]`).val(value);
			}
		});
		dataCompany.addClass('form-read-only');
		btnSave.addClass('d-none');
		btnCancelConfirm.addClass('d-none');
		textConfirm.addClass('d-none');
		btnChange.removeClass('d-none');
		textIndex.removeClass('d-none');
		toastr.success(result.data.messages);
		setTimeout(() => {
			loading.hide();
			location.reload();
		}, 1000);
	} catch (err) {
		removeErrors();
		$.each(err.response.data.errors, function (key, value) {
			$(`input[name=${key}]`).after(
				`<p class="text-sm m-0 text-danger validation-error" id="${key}"> ${value}</p>`
			);
		});
	}
});

btnConfirm.on('click', async function (e) {
	try {
		const arrayData = input.serializeArray();
		const objData = {};
		e.preventDefault();
		removeErrors();
		arrayData.forEach((item) => {
			if (item.name == 'price') {
				const valuePrice = inputPriceSelected.val();
				objData[item.name] = item.value;
				$(`#${item.name}`).text(valuePrice);
			} else {
				objData[item.name] = item.value;
				$(`#${item.name}`).text(item.value);
			}
		});
		e.preventDefault();

		await companyRepository.confirmSAdminUpdate(objData);

		btnSave.removeClass('d-none');
		btnConfirm.addClass('d-none');
		textConfirm.removeClass('d-none');
		textEdit.addClass('d-none');
		btnCancelConfirm.removeClass('d-none');
		btnCancelChange.addClass('d-none');
		dataCompany.addClass('form-read-only');
		$(`.form__input`).removeClass('--error');
	} catch (err) {
		removeErrors();
		$.each(err.response.data.errors, function (key, value) {
			$(`input[name=${key}]`).addClass('--error');
			$(`input[name=${key}]`).after(
				`<p class="validation-error" id="${key}"> ${value}</p>`
			);

			if ($(`select[name=${key}]`)) {
				$(`select[name=${key}]`).addClass('--error');
				$(`select[name=${key}]`).after(
					`<p class="validation-error" id="${key}"> ${value}</p>`
				);
			}
		});
	}
});

function removeErrors() {
	$('.validation-error').remove();
	$('.--error').removeClass('--error');
}
